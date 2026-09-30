"use server";

import { locationOptions, programOptions, timingOptions, type ContactState } from "@/content/form";
import { isEmail, isPhone, sendTableEmail } from "@/lib/email";

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
  if (!isEmail(data.email)) errors.email = "Please enter a valid email.";
  if (!isPhone(data.phone)) errors.phone = "Please enter a valid phone number.";
  if (!programOptions.includes(data.program)) errors.program = "Please select a program.";
  if (!locationOptions.includes(data.location)) errors.location = "Please select a location.";
  if (!timingOptions.includes(data.timing)) errors.timing = "Please select a timing.";
  if (form.get("consent") !== "on") errors.consent = "Please agree to continue.";
  const values = { ...data, consent: form.get("consent") === "on" ? "on" : "" };
  if (Object.keys(errors).length)
    return { status: "error", message: "Please check the highlighted fields.", errors, values };

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

  const sent = await sendTableEmail({
    title: "New enquiry — rptennisdubai.com",
    subject: `New enquiry: ${data.program} — ${data.name || data.email}`,
    rows,
    replyTo: data.email,
  });
  if (!sent.ok) {
    console.error("[contact] send failed:", sent.reason);
    return { status: "error", message: "Sorry, something went wrong. Please try again or message us on WhatsApp.", values };
  }

  return { status: "success", message: "Thanks for contacting us! We will get in touch with you shortly." };
}
