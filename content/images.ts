// All site photos, imported statically so next/image knows their size.
import logo from "@/assets/images/logo.png";
import hero1 from "@/assets/images/hero-1.jpg";
import hero2 from "@/assets/images/hero-2.jpg";
import hero3 from "@/assets/images/hero-3.jpg";
import coachAbout from "@/assets/images/coach-about.jpeg";
import coachPortrait from "@/assets/images/coach-portrait.jpeg";
import coachCourt from "@/assets/images/coach-court.jpeg";
import coachGroup from "@/assets/images/coach-group.jpeg";
import ctaBg from "@/assets/images/cta-bg.jpeg";
import postKids from "@/assets/images/post-kids.jpeg";
import postDubai from "@/assets/images/post-dubai-growth.jpeg";
import postPrivate from "@/assets/images/post-private-coaching.jpeg";
import groundSafa from "@/assets/images/ground-safa.jpeg";
import groundGiis from "@/assets/images/ground-giis.jpeg";
import facility from "@/assets/images/facility.jpeg";
import programPrivate from "@/assets/images/program-private.png";
import programPartner from "@/assets/images/program-partner.png";
import programGroup from "@/assets/images/program-group.png";
import court1 from "@/assets/images/court-1.jpeg";
import court2 from "@/assets/images/court-2.jpeg";
import mg0230 from "@/assets/images/mg-0230.jpg";
import mg0214 from "@/assets/images/mg-0214.jpg";
import mg0218 from "@/assets/images/mg-0218.jpg";
import mg0066 from "@/assets/images/mg-0066.jpg";
import mg0024 from "@/assets/images/mg-0024.jpg";
import mg0017 from "@/assets/images/mg-0017.jpg";

export const img = {
  logo,
  hero1,
  hero2,
  hero3,
  coachAbout,
  coachPortrait,
  coachCourt,
  coachGroup,
  ctaBg,
  postKids,
  postDubai,
  postPrivate,
  groundSafa,
  groundGiis,
  facility,
  programPrivate,
  programPartner,
  programGroup,
};

export const heroSlides = [hero1, hero2, hero3];

// Robin Hood section mosaic (first image is the large one).
// Placeholders from our own shoots — swap for approved Robin Hood Camp photos when they arrive.
export const robinHoodGallery = [
  { src: coachGroup, alt: "Coach Mahi with his players" },
  { src: court1, alt: "Players training on court" },
  { src: mg0230, alt: "Junior player hitting a forehand" },
  { src: coachCourt, alt: "Coach Mahi giving one-on-one feedback" },
  { src: mg0066, alt: "Group drill on court" },
];

// Same order as the live gallery page
export const gallery = [
  { src: coachGroup, alt: "Coach Mahi with students on court" },
  { src: postDubai, alt: "Tennis coaching session in Dubai" },
  { src: coachAbout, alt: "Coach Mahi at Rally Point Tennis Academy" },
  { src: court1, alt: "Players training at Rally Point Tennis" },
  { src: coachPortrait, alt: "Coach Mahi Marvadi on court" },
  { src: hero1, alt: "Tennis training in Dubai" },
  { src: coachCourt, alt: "Coach Mahi coaching a player" },
  { src: ctaBg, alt: "Group tennis session" },
  { src: postPrivate, alt: "Private tennis coaching" },
  { src: court2, alt: "Junior players at Rally Point Tennis" },
  { src: hero3, alt: "Tennis court at sunset" },
  { src: hero2, alt: "Tennis match play" },
  { src: mg0230, alt: "Rally Point Tennis training photo" },
  { src: mg0214, alt: "Rally Point Tennis training photo" },
  { src: mg0218, alt: "Rally Point Tennis training photo" },
  { src: mg0066, alt: "Rally Point Tennis training photo" },
  { src: mg0024, alt: "Rally Point Tennis training photo" },
  { src: mg0017, alt: "Rally Point Tennis training photo" },
];
