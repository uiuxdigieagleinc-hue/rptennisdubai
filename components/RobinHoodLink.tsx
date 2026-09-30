"use client";

/* RP Tennis → Robin Hood referral tracking (see ../HANDOFF.md)
   Adds UTM + ref params to Robin Hood links and sends a GA4 event on click
   (works with GTM dataLayer or gtag). Values must match what Robin Hood agrees to. */
export const RH_REF = {
  utm_source: "rptennisdubai",
  utm_medium: "referral",
  utm_campaign: "robinhood_summer_2027",
  ref: "RPTENNIS",
};

export const RH_URLS = {
  inquiry: "https://robinhoodmaine.campintouch.com/V2/family/inquiryForm.aspx",
  academy: "https://www.robinhoodcamp.com/maine-summer-camp-activities/tennis-academy-maine-summer-camp/",
};

type Win = Window & { dataLayer?: unknown[]; gtag?: (...a: unknown[]) => void };

const withRef = (url: string, type: string) => {
  const u = new URL(url);
  Object.entries(RH_REF).forEach(([k, v]) => u.searchParams.set(k, v));
  u.searchParams.set("utm_content", type);
  return u.toString();
};

type Props = { type: keyof typeof RH_URLS; className?: string; children: React.ReactNode };

export default function RobinHoodLink({ type, className, children }: Props) {
  const url = withRef(RH_URLS[type], type);
  const track = () => {
    const w = window as Win;
    const data = { link_type: type, link_url: url, ref_code: RH_REF.ref };
    w.dataLayer = w.dataLayer || [];
    w.dataLayer.push({ event: "robinhood_referral_click", ...data });
    if (typeof w.gtag === "function") w.gtag("event", "robinhood_referral_click", data);
  };
  return (
    <a className={className} data-rh={type} href={url} target="_blank" rel="noopener" onClick={track}>
      {children}
    </a>
  );
}
