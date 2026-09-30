import "server-only";
import { Resend } from "resend";

const esc = (s: string) =>
  s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);

type Mail = { title: string; subject: string; rows: [string, string][]; replyTo?: string };

// Sends a simple label/value table to CONTACT_TO via Resend.
export async function sendTableEmail({ title, subject, rows, replyTo }: Mail): Promise<{ ok: boolean; reason?: string }> {
  const key = process.env.RESEND_API_KEY;
  if (!key) return { ok: false, reason: "RESEND_API_KEY is not set" };

  const to = (process.env.CONTACT_TO || "rallypointtennisacademy@gmail.com").split(",").map((s) => s.trim());
  const from = process.env.CONTACT_FROM || "RP Tennis Website <onboarding@resend.dev>";

  const html = `<h2 style="font-family:Arial,sans-serif">${esc(title)}</h2>
<table style="font-family:Arial,sans-serif;font-size:14px;border-collapse:collapse">${rows
    .map(
      ([k, v]) =>
        `<tr><td style="padding:6px 12px 6px 0;color:#6B6C68;vertical-align:top"><b>${esc(k)}</b></td><td style="padding:6px 0;white-space:pre-wrap">${esc(v)}</td></tr>`
    )
    .join("")}</table>`;

  try {
    const { error } = await new Resend(key).emails.send({
      from,
      to,
      replyTo,
      subject,
      html,
      text: rows.map(([k, v]) => `${k}: ${v}`).join("\n"),
    });
    if (error) return { ok: false, reason: error.message };
    return { ok: true };
  } catch (e) {
    return { ok: false, reason: e instanceof Error ? e.message : String(e) };
  }
}

export const isEmail = (s: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s);
export const isPhone = (s: string) => /^[+\d][\d\s()-]{6,}$/.test(s);
