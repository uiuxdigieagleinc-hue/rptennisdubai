"use client";

// Robin Hood's inquiry form. We don't add any parameters — referrals are tracked on our side
// (see RobinHoodSignup) — but form events still go to GA4 if it's installed.
export const RH_URLS = {
  inquiry: "https://robinhoodmaine.campintouch.com/V2/family/inquiryForm.aspx",
};

type Win = Window & { dataLayer?: unknown[]; gtag?: (...a: unknown[]) => void };

export function trackEvent(event: string, data: Record<string, string>) {
  const w = window as Win;
  w.dataLayer = w.dataLayer || [];
  w.dataLayer.push({ event, ...data });
  if (typeof w.gtag === "function") w.gtag("event", event, data);
}
