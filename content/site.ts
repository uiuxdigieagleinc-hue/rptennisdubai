// Site-wide content. Edit here — no CMS.

export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || "https://rptennisdubai.com").replace(/\/$/, "");

export const site = {
  name: "RP Tennis",
  legalName: "Rally Point Tennis Academy",
  tagline: "Rally Point Tennis Dubai",
  description:
    "Rally Point Tennis Academy Dubai — world-class tennis coaching for kids and adults by Coach Mahendra. 1-on-1, semi-private and group sessions. Free 45-minute trial.",
  email: "rallypointtennisacademy@gmail.com",
  phoneDisplay: "+971 56 859 7401",
  phoneE164: "+971568597401",
  hours: "Mon-Fri 9:00AM — 4:00PM",
  social: {
    facebook: "https://www.facebook.com/profile.php?id=61584744901380",
    instagram: "https://www.instagram.com/rallypoint_academy/",
  },
  designer: { name: "DigieagleInc", url: "https://www.digieagleinc.com/" },
};

const WA = "https://wa.me/971568597401";
export const whatsapp = {
  base: WA,
  book: `${WA}?text=${encodeURIComponent("Hi I would like to book a tennis court ")}`,
  float: `${WA}?text=${encodeURIComponent("Hi, I'd like to know more about tennis coaching at RP Tennis")}`,
};

export type NavItem = { label: string; href: string; children?: NavItem[] };

export const nav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us/" },
  { label: "Grounds", href: "/grounds/" },
  { label: "Robin Hood Camp", href: "/robin-hood-camp/" },
  {
    label: "Programs",
    href: "/programs/",
    children: [
      { label: "1 on 1 Coaching", href: "/programs/#private" },
      { label: "Semi Private", href: "/programs/#semi-private" },
      { label: "Group Training", href: "/programs/#group" },
    ],
  },
  {
    label: "Other",
    href: "#",
    children: [
      { label: "Gallery", href: "/gallery/" },
      { label: "Reviews", href: "/reviews/" },
      { label: "Blog", href: "/blog/" },
      { label: "Contact us", href: "/contact-us/" },
    ],
  },
];

export const locations = [
  {
    name: "Safa British School",
    area: "Al Wasl Road, Dubai",
    mapQuery: "Safa British School, Al Wasl Road, Dubai",
  },
  {
    name: "Global Indian International School",
    short: "GIIS Dubai",
    area: "Dubai",
    mapQuery: "Global Indian International School, Dubai",
  },
];

export const stats = [
  { value: 22, suffix: "+", label: "Years Experience" },
  { value: 2, suffix: "", label: "Locations" },
  { value: 11, suffix: "+", label: "Five Star Reviews" },
  { value: 100, suffix: "+", label: "Students" },
];
