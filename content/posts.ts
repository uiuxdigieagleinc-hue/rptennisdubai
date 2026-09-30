import type { StaticImageData } from "next/image";
import { img } from "./images";

export type Category = { slug: string; name: string };

export const categories: Category[] = [
  { slug: "academy-news", name: "Academy News" },
  { slug: "kids-parents", name: "Kids & Parents" },
  { slug: "tennis-tips", name: "Tennis Tips" },
];

type Block = { type: "p" | "h3"; text: string };

export type Post = {
  slug: string;
  title: string;
  date: string; // ISO
  modified: string;
  category: string; // category slug
  image: StaticImageData;
  excerpt: string;
  body: Block[];
};

const p = (text: string): Block => ({ type: "p", text });
const h3 = (text: string): Block => ({ type: "h3", text });

// Newest first (matches the live blog order). Slugs match the WordPress URLs.
export const posts: Post[] = [
  {
    slug: "why-tennis-is-perfect-for-your-childs-development",
    title: "How Tennis Helps Children Build Confidence and Discipline",
    date: "2026-04-11T05:42:45Z",
    modified: "2026-05-26T07:11:55Z",
    category: "kids-parents",
    image: img.postKids,
    excerpt:
      "Tennis is more than just a sport for children — it is a powerful activity that teaches important life skills, from confidence and discipline to fitness and teamwork.",
    body: [
      p("Tennis is more than just a sport for children — it is a powerful activity that teaches important life skills. Many parents in Dubai are enrolling their children in tennis coaching programs because of the physical, mental, and social benefits the sport provides."),
      p("One of the biggest advantages of tennis is confidence building. As children learn new skills and improve their game, they become more confident in themselves. Every successful rally, serve, or match win motivates them to keep improving."),
      p("Tennis also teaches discipline and responsibility. Young players learn the importance of practice, consistency, patience, and hard work. Coaches encourage children to stay focused, follow instructions, and respect opponents both on and off the court."),
      p("Another major benefit is physical fitness. Tennis improves agility, balance, coordination, and endurance. Instead of spending excessive time on screens, children remain active and healthy through regular training sessions."),
      p("The sport also helps children develop communication and teamwork skills. Even though tennis can be an individual sport, players often train in groups and participate in friendly matches that improve social interaction."),
      p("Dubai offers excellent opportunities for junior tennis development through professional coaching programs and modern sports facilities. Many academies now provide beginner-friendly sessions designed specifically for kids."),
      p("For parents looking to build their child’s confidence, discipline, and fitness, tennis is one of the best sports to start with."),
    ],
  },
  {
    slug: "why-tennis-coaching-in-dubai-is-growing-faster-than-ever",
    title: "Why Tennis Coaching in Dubai is Growing Faster Than Ever",
    date: "2026-04-11T05:42:12Z",
    modified: "2026-05-26T07:13:26Z",
    category: "academy-news",
    image: img.postDubai,
    excerpt:
      "Dubai has quickly become one of the most exciting destinations for tennis enthusiasts, with world-class courts, year-round training and experienced international coaches.",
    body: [
      p("Dubai has quickly become one of the most exciting destinations for tennis enthusiasts. From world-class courts to year-round training opportunities, the city offers the perfect environment for players of all ages and skill levels. The rising popularity of tennis coaching in Dubai is driven by a combination of professional coaching standards, modern sports facilities, and an increasing interest in healthy lifestyles."),
      p("One of the biggest advantages of learning tennis in Dubai is access to experienced international coaches. Many tennis academies and private trainers focus on personalized coaching methods that help players improve technique, footwork, match strategy, and confidence on the court. Whether someone is a beginner learning basic strokes or an advanced player preparing for tournaments, tailored coaching programs help accelerate progress."),
      p("Another reason tennis is booming in Dubai is the availability of high-quality facilities. Indoor and outdoor courts, fitness zones, and modern training equipment create a professional environment for consistent improvement. Several academies also offer flexible schedules for children, adults, and corporate professionals."),
      p("Parents in Dubai are also encouraging children to join tennis programs because the sport helps develop discipline, focus, teamwork, and fitness. Tennis is no longer just a recreational activity — it has become a complete lifestyle sport that combines physical health with mental strength."),
      p("As Dubai continues to host international tournaments and sports events, more residents are becoming inspired to pick up a racket and start training. Tennis coaching in Dubai is not just about learning a sport; it is about building confidence, staying active, and becoming part of a growing sports community."),
    ],
  },
  {
    slug: "5-important-benefits-of-private-tennis-coaching",
    title: "5 Important Benefits of Private Tennis Coaching",
    date: "2026-04-11T05:41:26Z",
    modified: "2026-05-26T07:15:05Z",
    category: "tennis-tips",
    image: img.postPrivate,
    excerpt:
      "Private tennis coaching is one of the fastest ways to improve your game. One-on-one coaching focuses entirely on your strengths, weaknesses, and playing style.",
    body: [
      p("Private tennis coaching is one of the fastest ways to improve your game. Unlike group sessions, one-on-one coaching focuses entirely on your strengths, weaknesses, and playing style. This personalized approach allows players to learn faster and develop confidence on the court."),
      h3("1. Personalized Training"),
      p("Every player has different goals. Some want to improve fitness, while others want to compete professionally. Private coaching sessions are designed specifically for the individual player, making every lesson more effective."),
      h3("2. Faster Skill Development"),
      p("With dedicated attention from a coach, players receive instant feedback on technique, movement, and strategy. This helps correct mistakes early and speeds up improvement."),
      h3("3. Flexible Scheduling"),
      p("Private lessons offer greater flexibility, making it easier for students, working professionals, and families to fit tennis training into their busy schedules."),
      h3("4. Better Match Confidence"),
      p("Coaches help players improve not only technically but mentally as well. Through practice matches and tactical guidance, players become more confident during competitive games."),
      h3("5. Complete Fitness Improvement"),
      p("Tennis is a full-body workout that improves stamina, agility, coordination, and reaction time. Regular coaching sessions help players stay active while learning a fun and competitive sport."),
      p("Dubai’s growing tennis culture has created strong demand for private coaching programs, especially among adults and children looking for structured training opportunities."),
      p("Private coaching is ideal for anyone who wants focused improvement, professional guidance, and long-term growth in tennis."),
    ],
  },
];

export const getPost = (slug: string) => posts.find((x) => x.slug === slug);
export const getCategory = (slug: string) => categories.find((c) => c.slug === slug);

export const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric", timeZone: "UTC" });
