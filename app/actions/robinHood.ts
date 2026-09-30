"use server";

import { isEmail, isPhone, sendTableEmail } from "@/lib/email";

export type RobinHoodLeadState = {
  status: "idle" | "success" | "error";
  message?: string;
  name?: string;
  values?: Record<string, string>;
  errors?: Partial<Record<"name" | "email" | "phone", string>>;
};

// Referral record on our side: every family we send to Robin Hood is emailed to the academy
// before they continue to Robin Hood's own inquiry form. Nothing on Robin Hood's side changes.
export async function sendRobinHoodLead(_prev: RobinHoodLeadState, form: FormData): Promise<RobinHoodLeadState> {
  const get = (k: string) => String(form.get(k) ?? "").trim().slice(0, 500);
  const data = { name: get("name"), email: get("email"), phone: get("phone"), page: get("page") };

  // Honeypot: let bots "succeed" without sending anything
  if (get("company")) return { status: "success", name: data.name };

  const errors: RobinHoodLeadState["errors"] = {};
  if (data.name.length < 2) errors.name = "Please enter your name.";
  if (!isEmail(data.email)) errors.email = "Please enter a valid email.";
  if (!isPhone(data.phone)) errors.phone = "Please enter a valid phone number.";
  if (Object.keys(errors).length)
    return { status: "error", message: "Please check the highlighted fields.", errors, values: data };

  const when = new Date().toLocaleString("en-GB", { timeZone: "Asia/Dubai", dateStyle: "medium", timeStyle: "short" });
  const sent = await sendTableEmail({
    title: "Robin Hood Camp referral — rptennisdubai.com",
    subject: `Robin Hood Camp referral: ${data.name}`,
    rows: [
      ["Name", data.name],
      ["Email", data.email],
      ["WhatsApp / Phone", data.phone],
      ["Date (Dubai)", when],
      ["Sent from", data.page || "—"],
      ["Next step", "Family was sent to Robin Hood's inquiry form and asked to use the same name and email there."],
    ],
    replyTo: data.email,
  });

  // Don't block the family if email is down — they still continue to Robin Hood. Log so it can be fixed.
  if (!sent.ok) console.error("[robin-hood] referral email not sent:", sent.reason, data);

  return { status: "success", name: data.name };
}
