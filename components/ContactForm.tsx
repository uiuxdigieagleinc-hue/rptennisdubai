"use client";

import { usePathname } from "next/navigation";
import { useActionState } from "react";
import { sendContact } from "@/app/actions/contact";
import { locationOptions, programOptions, timingOptions, type ContactState } from "@/content/form";

const initial: ContactState = { status: "idle" };

type Key = keyof NonNullable<ContactState["errors"]>;

export default function ContactForm({ id = "contact" }: { id?: string }) {
  const pathname = usePathname();
  const [state, action, pending] = useActionState(sendContact, initial);
  const err = state.errors ?? {};
  const v = state.values ?? {};

  if (state.status === "success") {
    return (
      <p className="form__done" role="status">
        {state.message}
      </p>
    );
  }

  const f = (name: string) => `${id}-${name}`;
  const invalid = (k: Key) => (err[k] ? { "aria-invalid": true, "aria-describedby": f(`${k}-err`) } : {});
  const errMsg = (k: Key) =>
    err[k] ? (
      <span id={f(`${k}-err`)} className="form__err">
        {err[k]}
      </span>
    ) : null;

  const select = (k: "program" | "location" | "timing", label: string, placeholder: string, options: string[]) => (
    <div className="form__field form__field--half">
      <label className="sr-only" htmlFor={f(k)}>
        {label} (Required)
      </label>
      {/* keyed so React re-applies the echoed value after the form resets */}
      <select key={v[k] ?? ""} id={f(k)} name={k} required defaultValue={v[k] ?? ""} {...invalid(k)}>
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((o) => (
          <option key={o}>{o}</option>
        ))}
      </select>
      {errMsg(k)}
    </div>
  );

  return (
    <form className="form" action={action}>
      <input type="hidden" name="page" value={pathname} />
      <div className="form__hp" aria-hidden="true">
        <label htmlFor={f("company")}>Company</label>
        <input id={f("company")} name="company" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="form__field form__field--half">
        <label className="sr-only" htmlFor={f("name")}>
          Name
        </label>
        <input id={f("name")} name="name" type="text" placeholder="Name" autoComplete="name" defaultValue={v.name} />
      </div>
      <div className="form__field form__field--half">
        <label className="sr-only" htmlFor={f("email")}>
          Email (Required)
        </label>
        <input
          id={f("email")}
          name="email"
          type="email"
          placeholder="Email"
          autoComplete="email"
          required
          defaultValue={v.email}
          {...invalid("email")}
        />
        {errMsg("email")}
      </div>
      <div className="form__field form__field--half">
        <label className="sr-only" htmlFor={f("phone")}>
          Phone (Required)
        </label>
        <input
          id={f("phone")}
          name="phone"
          type="tel"
          placeholder="WhatsApp / Phone"
          autoComplete="tel"
          required
          defaultValue={v.phone}
          {...invalid("phone")}
        />
        {errMsg("phone")}
      </div>
      {select("program", "Program of Interest", "— Select a program —", programOptions)}
      {select("location", "Preferred Location", "— Select location —", locationOptions)}
      {select("timing", "Preferred Timing", "— Select timing —", timingOptions)}
      <div className="form__field">
        <label className="sr-only" htmlFor={f("message")}>
          Message
        </label>
        <textarea id={f("message")} name="message" placeholder="Message" rows={5} defaultValue={v.message} />
      </div>
      <div className="form__field form__consent">
        <input
          id={f("consent")}
          name="consent"
          type="checkbox"
          required
          defaultChecked={v.consent === "on"}
          {...invalid("consent")}
        />
        <label htmlFor={f("consent")}>I agree that my submitted data is being collected and stored.</label>
        {errMsg("consent")}
      </div>

      {state.status === "error" && (
        <p className="form__msg" role="alert">
          {state.message}
        </p>
      )}

      <button className="btn form__submit" type="submit" disabled={pending}>
        {pending ? "Sending…" : "Send Message"}
      </button>
    </form>
  );
}
