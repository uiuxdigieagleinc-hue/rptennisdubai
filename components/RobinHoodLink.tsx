"use client";

// Robin Hood's own pages. We don't add any parameters — referrals are tracked on our side
// (see RobinHoodSignup) — but clicks still go to GA4 if it's installed.
export const RH_URLS = {
  inquiry: "https://robinhoodmaine.campintouch.com/V2/family/inquiryForm.aspx",
  academy: "https://www.robinhoodcamp.com/maine-summer-camp-activities/tennis-academy-maine-summer-camp/",
};

type Win = Window & { dataLayer?: unknown[]; gtag?: (...a: unknown[]) => void };

export function trackEvent(event: string, data: Record<string, string>) {
  const w = window as Win;
  w.dataLayer = w.dataLayer || [];
  w.dataLayer.push({ event, ...data });
  if (typeof w.gtag === "function") w.gtag("event", event, data);
}

type Props = { type: keyof typeof RH_URLS; className?: string; children: React.ReactNode };

export default function RobinHoodLink({ type, className, children }: Props) {
  const url = RH_URLS[type];
  return (
    <a
      className={className}
      href={url}
      target="_blank"
      rel="noopener"
      onClick={() => trackEvent("robinhood_click", { link_type: type, link_url: url })}
    >
      {children}
    </a>
  );
}
