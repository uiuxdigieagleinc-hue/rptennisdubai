"use client";

import { usePathname } from "next/navigation";
import { useActionState, useEffect, useRef, useState } from "react";
import { sendRobinHoodLead, type RobinHoodLeadState } from "@/app/actions/robinHood";
import { CloseIcon } from "./Icons";
import { RH_URLS, trackEvent } from "./RobinHoodLink";

const initial: RobinHoodLeadState = { status: "idle" };
const REDIRECT_SECONDS = 6;

// "Request camp info": collect name / email / phone on our site (our referral record),
// then send the family on to Robin Hood's inquiry form.
export default function RobinHoodSignup({ className = "btn", children }: { className?: string; children: React.ReactNode }) {
  const dialog = useRef<HTMLDialogElement>(null);
  const [formKey, setFormKey] = useState(0);

  const open = () => {
    dialog.current?.showModal();
    trackEvent("robinhood_form_open", { page: window.location.pathname });
  };
  const close = () => dialog.current?.close();

  return (
    <>
      <button type="button" className={className} onClick={open}>
        {children}
      </button>
      <dialog
        ref={dialog}
        className="rh-dialog"
        aria-labelledby="rh-dialog-title"
        onClick={(e) => e.target === dialog.current && close()}
        onClose={() => setFormKey((k) => k + 1)}
      >
        <button type="button" className="rh-dialog__close" onClick={close} aria-label="Close">
          <CloseIcon />
        </button>
        <LeadForm key={formKey} />
      </dialog>
    </>
  );
}

function LeadForm() {
  const pathname = usePathname();
  const [state, action, pending] = useActionState(sendRobinHoodLead, initial);
  const [left, setLeft] = useState(REDIRECT_SECONDS);
  const err = state.errors ?? {};
  const v = state.values ?? {};

  // After a successful submit, count down and continue to Robin Hood
  useEffect(() => {
    if (state.status !== "success") return;
    trackEvent("robinhood_lead", { page: pathname });
    const t = setInterval(() => setLeft((s) => s - 1), 1000);
    return () => clearInterval(t);
  }, [state.status, pathname]);

  useEffect(() => {
    if (state.status === "success" && left <= 0) window.location.assign(RH_URLS.inquiry);
  }, [left, state.status]);

  if (state.status === "success") {
    return (
      <div className="rh-dialog__done" role="status">
        <p className="eyebrow">Step 2 of 2</p>
        <h2 id="rh-dialog-title" className="rh-dialog__title">
          Thanks{state.name ? `, ${state.name.split(" ")[0]}` : ""}!
        </h2>
        <p className="text">
          Coach Mahi now has your details. Next, complete Robin Hood Camp&apos;s inquiry form.{" "}
          <strong>Please use the same name and email</strong> so we can follow up with you.
        </p>
        <a className="btn rh-dialog__go" href={RH_URLS.inquiry}>
          Continue to Robin Hood ({Math.max(left, 0)})
        </a>
      </div>
    );
  }

  const invalid = (k: keyof typeof err) => (err[k] ? { "aria-invalid": true, "aria-describedby": `rh-${k}-err` } : {});
  const errMsg = (k: keyof typeof err) =>
    err[k] ? (
      <span id={`rh-${k}-err`} className="form__err">
        {err[k]}
      </span>
    ) : null;

  return (
    <>
      <p className="eyebrow">Step 1 of 2</p>
      <h2 id="rh-dialog-title" className="rh-dialog__title">
        Request Robin Hood Camp info
      </h2>
      <p className="text rh-dialog__lead">
        Leave your details for Coach Mahi, then we&apos;ll take you to Robin Hood Camp&apos;s inquiry form.
      </p>
      <form className="form" action={action}>
        <input type="hidden" name="page" value={pathname} />
        <div className="form__hp" aria-hidden="true">
          <label htmlFor="rh-company">Company</label>
          <input id="rh-company" name="company" tabIndex={-1} autoComplete="off" />
        </div>
        <div className="form__field">
          <label className="sr-only" htmlFor="rh-name">
            Name (Required)
          </label>
          <input id="rh-name" name="name" type="text" placeholder="Parent / player name" autoComplete="name" required defaultValue={v.name} {...invalid("name")} />
          {errMsg("name")}
        </div>
        <div className="form__field form__field--half">
          <label className="sr-only" htmlFor="rh-email">
            Email (Required)
          </label>
          <input id="rh-email" name="email" type="email" placeholder="Email" autoComplete="email" required defaultValue={v.email} {...invalid("email")} />
          {errMsg("email")}
        </div>
        <div className="form__field form__field--half">
          <label className="sr-only" htmlFor="rh-phone">
            Phone (Required)
          </label>
          <input id="rh-phone" name="phone" type="tel" placeholder="WhatsApp / Phone" autoComplete="tel" required defaultValue={v.phone} {...invalid("phone")} />
          {errMsg("phone")}
        </div>
        {state.status === "error" && (
          <p className="form__msg" role="alert">
            {state.message}
          </p>
        )}
        <button className="btn form__submit" type="submit" disabled={pending}>
          {pending ? "Saving…" : "Continue to Robin Hood"}
        </button>
      </form>
    </>
  );
}
