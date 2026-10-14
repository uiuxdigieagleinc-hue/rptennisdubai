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
import groundEnglishCollege from "@/assets/images/ground-english-college.jpg";
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
import rh01 from "@/assets/images/rh-01.jpg";
import rh02 from "@/assets/images/rh-02.jpg";
import rh03 from "@/assets/images/rh-03.jpg";
import rh04 from "@/assets/images/rh-04.jpg";
import rh05 from "@/assets/images/rh-05.jpg";
import rh06 from "@/assets/images/rh-06.jpg";
import rh07 from "@/assets/images/rh-07.jpg";
import rh08 from "@/assets/images/rh-08.jpg";
import rh09 from "@/assets/images/rh-09.jpg";
import rh10 from "@/assets/images/rh-10.jpg";
import rh11 from "@/assets/images/rh-11.jpg";
import rh12 from "@/assets/images/rh-12.jpg";
import rh13 from "@/assets/images/rh-13.jpg";
import rh14 from "@/assets/images/rh-14.jpg";
import rh15 from "@/assets/images/rh-15.jpg";
import rh16 from "@/assets/images/rh-16.jpg";
import rh17 from "@/assets/images/rh-17.jpg";
import rh18 from "@/assets/images/rh-18.jpg";
import rh19 from "@/assets/images/rh-19.jpg";
import rh20 from "@/assets/images/rh-20.jpg";

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
  groundEnglishCollege,
  groundGiis,
  facility,
  programPrivate,
  programPartner,
  programGroup,
  rhCoach: rh07,
};

export const heroSlides = [hero1, hero2, hero3];

// Robin Hood Summer Camp photos. The camp page mosaic shows the first 9 (first image is the large one);
// the gallery page shows them all.
export const robinHoodGallery = [
  { src: rh15, alt: "Campers and their coach at Robin Hood Summer Camp" },
  { src: rh19, alt: "Camper hitting a forehand at Robin Hood Summer Camp" },
  { src: rh18, alt: "Tennis Academy players lined up at the net" },
  { src: rh01, alt: "Coach guiding a young camper's forehand" },
  { src: rh09, alt: "Player serving on the Robin Hood Summer Camp courts" },
  { src: rh05, alt: "Campers with their rackets at the tennis courts" },
  { src: rh16, alt: "Coach and camper going through notes on court" },
  { src: rh13, alt: "Flag ceremony by the lake at Robin Hood Summer Camp" },
  { src: rh20, alt: "Camper reaching for an overhead" },
  { src: rh07, alt: "Coach Mahendra coaching a camper at Robin Hood Summer Camp" },
  { src: rh17, alt: "Tennis Academy group on court" },
  { src: rh03, alt: "Handshake at the net after a match" },
  { src: rh08, alt: "Player tossing the ball to serve" },
  { src: rh04, alt: "Campers together at the tennis courts" },
  { src: rh02, alt: "Practice session on the Robin Hood Summer Camp courts" },
  { src: rh10, alt: "Serve practice at Robin Hood Summer Camp" },
  { src: rh06, alt: "Tennis Academy players in a line on court" },
  { src: rh11, alt: "Player following through on a serve" },
  { src: rh14, alt: "Footwork ladder drill with campers" },
  { src: rh12, alt: "Player finishing a serve" },
];

// Same order as the live gallery page
export const gallery = [
  { src: coachGroup, alt: "Coach Mahendra with students on court" },
  { src: postDubai, alt: "Tennis coaching session in Dubai" },
  { src: coachAbout, alt: "Coach Mahendra at Rally Point Tennis Academy" },
  { src: court1, alt: "Players training at Rally Point Tennis" },
  { src: coachPortrait, alt: "Coach Mahendra Marvadi on court" },
  { src: hero1, alt: "Tennis training in Dubai" },
  { src: coachCourt, alt: "Coach Mahendra coaching a player" },
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
