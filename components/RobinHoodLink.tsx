"use client";

// Robin Hood links agreed with the client. We don't add any parameters — referrals are tracked on our side
// (see RobinHoodSignup) — but form events still go to GA4 if it's installed.
export const RH_URLS = {
  website: "https://www.robinhoodcamp.com/",
  inquiry: "https://robinhoodmaine.campintouch.com/v2/family/inquiryForm.aspx",
};

type Win = Window & { dataLayer?: unknown[]; gtag?: (...a: unknown[]) => void };

export function trackEvent(event: string, data: Record<string, string>) {
  const w = window as Win;
  w.dataLayer = w.dataLayer || [];
  w.dataLayer.push({ event, ...data });
  if (typeof w.gtag === "function") w.gtag("event", event, data);
}

// "Discover Robin Hood Camp Maine": opens robinhoodcamp.com in a new tab and logs the click
export function DiscoverRobinHood({ className = "btn btn--lg", children = "Discover Robin Hood Camp Maine" }: { className?: string; children?: React.ReactNode }) {
  return (
    <a
      className={className}
      href={RH_URLS.website}
      target="_blank"
      rel="noopener"
      onClick={() => trackEvent("robinhood_discover_click", { page: window.location.pathname })}
    >
      {children}
    </a>
  );
}
