"use server";

import { Resend } from "resend";
import { locationOptions, programOptions, timingOptions, type ContactState } from "@/content/form";

const esc = (s: string) =>
  s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);

export async function sendContact(_prev: ContactState, form: FormData): Promise<ContactState> {
  // Honeypot: bots fill every field
  if (String(form.get("company") ?? "").trim()) return { status: "success" };

  const get = (k: string) => String(form.get(k) ?? "").trim().slice(0, 2000);
  const data = {
    name: get("name"),
    email: get("email"),
    phone: get("phone"),
    program: get("program"),
    location: get("location"),
    timing: get("timing"),
    message: get("message"),
    page: get("page"),
  };

  const errors: ContactState["errors"] = {};
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) errors.email = "Please enter a valid email.";
  if (!/^[+\d][\d\s()-]{6,}$/.test(data.phone)) errors.phone = "Please enter a valid phone number.";
  if (!programOptions.includes(data.program)) errors.program = "Please select a program.";
  if (!locationOptions.includes(data.location)) errors.location = "Please select a location.";
  if (!timingOptions.includes(data.timing)) errors.timing = "Please select a timing.";
  if (form.get("consent") !== "on") errors.consent = "Please agree to continue.";
  const values = { ...data, consent: form.get("consent") === "on" ? "on" : "" };
  if (Object.keys(errors).length)
    return { status: "error", message: "Please check the highlighted fields.", errors, values };

  const key = process.env.RESEND_API_KEY;
  const to = (process.env.CONTACT_TO || "rallypointtennisacademy@gmail.com").split(",").map((s) => s.trim());
  const from = process.env.CONTACT_FROM || "RP Tennis Website <onboarding@resend.dev>";
  if (!key) {
    console.error("[contact] RESEND_API_KEY is not set");
    return { status: "error", message: "Sorry, the form is not available right now. Please message us on WhatsApp.", values };
  }

  const rows: [string, string][] = [
    ["Name", data.name || "—"],
    ["Email", data.email],
    ["WhatsApp / Phone", data.phone],
    ["Program of Interest", data.program],
    ["Preferred Location", data.location],
    ["Preferred Timing", data.timing],
    ["Message", data.message || "—"],
    ["Sent from", data.page || "—"],
  ];

  const html = `<h2 style="font-family:Arial,sans-serif">New enquiry — rptennisdubai.com</h2>
<table style="font-family:Arial,sans-serif;font-size:14px;border-collapse:collapse">${rows
    .map(
      ([k, v]) =>
        `<tr><td style="padding:6px 12px 6px 0;color:#6B6C68;vertical-align:top"><b>${k}</b></td><td style="padding:6px 0;white-space:pre-wrap">${esc(v)}</td></tr>`
    )
    .join("")}</table>`;

  try {
    const { error } = await new Resend(key).emails.send({
      from,
      to,
      replyTo: data.email,
      subject: `New enquiry: ${data.program} — ${data.name || data.email}`,
      html,
      text: rows.map(([k, v]) => `${k}: ${v}`).join("\n"),
    });
    if (error) throw new Error(error.message);
  } catch (e) {
    console.error("[contact] send failed", e);
    return { status: "error", message: "Sorry, something went wrong. Please try again or message us on WhatsApp.", values };
  }

  return { status: "success", message: "Thanks for contacting us! We will get in touch with you shortly." };
}
