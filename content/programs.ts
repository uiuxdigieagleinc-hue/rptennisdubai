import { img } from "./images";

export const programs = [
  {
    id: "private",
    title: "1 on 1 Coaching",
    // The live Programs page and About page call the second one "Semi Private";
    // the Home page calls it "Partner Training". Kept as on the live site.
    image: img.programPrivate,
    text: "Personalized one-on-one coaching to fast-track your progress with every session.",
    points: ["100% personalized", "Fastest improvement", "Custom plan by Mahendra"],
  },
  {
    id: "semi-private",
    title: "Semi Private",
    homeTitle: "Partner Training",
    image: img.programPartner,
    text: "Train with a partner with focused personal instruction — best of both worlds.",
    points: ["Train with 1 partner", "More personal attention", "Tailored drills"],
  },
  {
    id: "group",
    title: "Group Training",
    homeTitle: "Group Training Sessions",
    image: img.programGroup,
    text: "Fun, energetic sessions for kids and adults. Build skills in a social, competitive environment.",
    points: ["Kids & adults welcome", "Structured curriculum", "Fun & social setting"],
  },
];

export const faqs = [
  {
    q: "Is coaching suitable for complete beginners?",
    a: "Absolutely. Coach Mahendra has taken complete beginners to intermediate-advanced level in as little as 10 days. We welcome players of all levels — the program is always tailored to where you are now.",
  },
  {
    q: "Are there programs for children?",
    a: "Yes — Coach Mahendra coaches kids and adults. Junior students (any age) are welcome in group and private sessions. Many of our students are children whose parents have seen tremendous improvement.",
  },
  {
    q: "How do I book a session?",
    a: "The fastest way is WhatsApp (+971 56 859 7401). You can also use the inquiry form on our Contact page. We typically respond within 1 hour.",
  },
];

export const facilityFeatures = [
  { title: "Professional Courts", text: "Maintained to AITA match standards at all 3 locations." },
  { title: "Year-Round Play", text: "7 days a week, flexible morning & evening slots." },
  { title: "Equipment Provided", text: "Balls and training equipment for all coaching sessions." },
  { title: "Central Dubai", text: "All 3 courts easily reachable from across Dubai." },
];
