"use client";

// Robin Hood's website (families go here after leaving their details with us). We don't add any parameters — referrals are tracked on our side
// (see RobinHoodSignup) — but form events still go to GA4 if it's installed.
export const RH_URLS = {
  website: "https://www.robinhoodcamp.com/",
};

type Win = Window & { dataLayer?: unknown[]; gtag?: (...a: unknown[]) => void };

export function trackEvent(event: string, data: Record<string, string>) {
  const w = window as Win;
  w.dataLayer = w.dataLayer || [];
  w.dataLayer.push({ event, ...data });
  if (typeof w.gtag === "function") w.gtag("event", event, data);
}
