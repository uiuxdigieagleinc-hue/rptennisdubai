// Robin Hood Camp content. Facts taken from robinhoodcamp.com (Oct 2026) — re-check with Robin Hood before launch.

export const rhFacts = [
  { value: "35+", label: "Activities every day — tennis is just one of them" },
  { value: "6", label: "Specialist academies: tennis, golf, squash, soccer, riding and watersports" },
  { value: "2–7 wks", label: "Flexible sessions, 27 June – 15 August 2027" },
  { value: "25+", label: "Countries campers come from" },
];

// "More than tennis": everything else brothers and sisters can do at camp
export const rhActivities = [
  {
    title: "Waterfront",
    text: "The only camp in the world on both a freshwater lake and the ocean.",
    items: [
      "Sailing",
      "Waterskiing",
      "Wakeboarding",
      "Wakesurfing",
      "Windsurfing",
      "Kayaking",
      "Canoeing",
      "Paddleboarding",
      "Rowing",
      "Swimming",
      "Water trampoline & slide",
    ],
  },
  {
    title: "Team sports",
    text: "Daily games and real coaching, from first-timers to competitive players.",
    items: [
      "Soccer",
      "Basketball",
      "Lacrosse",
      "Baseball",
      "Volleyball",
      "Flag football",
      "Ultimate frisbee",
      "Street hockey",
      "Field hockey",
      "Bubble soccer",
    ],
  },
  {
    title: "Individual sports",
    text: "Expert instruction in classic and less common sports.",
    items: [
      "Tennis",
      "Golf",
      "Squash",
      "Horse riding",
      "Archery",
      "Fencing",
      "Muay Thai",
      "Gymnastics",
      "Skateboarding",
      "Yoga",
      "Fitness & running",
    ],
  },
  {
    title: "Adventure",
    text: "Climb, balance and explore, right inside camp.",
    items: ["Climbing wall", "High ropes course", "Mountain biking", "Circus & aerial silks", "Juggling & unicycle", "Survival skills"],
  },
  {
    title: "Arts, music & clubs",
    text: "Stage shows, studios and quiet clubs, ending with the Nottingham Fair musical.",
    items: ["Drama", "Dance", "Improv comedy", "Guitar", "Piano", "Singing", "Drums", "Drawing & painting", "Jewellery & tie-dye", "Baking", "Chess"],
  },
  {
    title: "Trips & excursions",
    text: "Up to 50 campers head out of camp every day on day and overnight trips.",
    items: [
      "Acadia National Park",
      "Whitewater rafting",
      "Ocean sailing cruises",
      "Whale watching",
      "Rock climbing",
      "Mt. Katahdin hike",
      "Island boat trips",
      "Blueberry picking",
    ],
  },
];

export const rhAcademies = [
  { name: "Tennis", text: "Led by Coach Mahendra as Tennis Director, on six plexi-pave courts with four pro coaches.", coach: true },
  { name: "Golf", text: "PGA professional instruction, a full driving range and rounds at local country clubs." },
  { name: "Squash", text: "Two outdoor courts and two professional coaches." },
  { name: "Soccer", text: "Intensive weeks with personal coaching and fitness training." },
  { name: "Riding", text: "English hunt seat instruction and trail riding." },
  { name: "Watersports", text: "Waterski, wakeboard and wakesurf behind championship boats." },
];

export const rhTennisAcademy = [
  { title: "Seven-day intensive", text: "At least 3 hours of tennis every day of the Academy week." },
  { title: "Pro coaching team", text: "Small-group drills with four pro coaches and assistant coaches." },
  { title: "Daily private lesson", text: "Optional private or semi-private lesson every day." },
  { title: "Match play & fitness", text: "Conditioning, footwork and daily match play for tournament strategy." },
];

// How a camp day works (100% elective programme)
export const rhDay = [
  {
    title: "Morning interest periods",
    text: "Each week campers pick two morning activities and keep them all week, so they build real skill.",
  },
  {
    title: "Afternoon activities",
    text: "Two more activities every afternoon, which campers can change daily to try something new.",
  },
  {
    title: "Trips & evenings",
    text: "Optional day and overnight trips across Maine, plus campfire activities and camp traditions.",
  },
];

export const rhCampLife = [
  "100% elective: every camper builds their own programme, open to all ages and skill levels",
  "Wooden cabins with screened windows, showers steps away",
  "Sensitivity Directors help first-time campers settle in",
  "Daily emails from parents; calls home up to twice a week after the first week",
  "Siblings can attend the same weeks and follow completely different programmes",
  "Two generations of the Littlefield family, 99 years of camp tradition",
];

// 2027 weeks. Academy weeks are tentative until Robin Hood confirms (HANDOFF.md Q11).
export const rhWeeks = [
  { week: "Week 1", dates: "27 June – 3 July", tennis: true },
  { week: "Week 2", dates: "4 – 10 July", tennis: true, soccer: true },
  { week: "Week 3", dates: "11 – 17 July", tennis: true },
  { week: "Week 4", dates: "18 – 24 July", tennis: true },
  { week: "Week 5", dates: "25 – 31 July" },
  { week: "Week 6", dates: "1 – 7 August", tennis: true, soccer: true },
  { week: "Week 7", dates: "8 – 15 August" },
];

export const rhFaqs = [
  {
    q: "My other children don't play tennis. Can they still come?",
    a: "Yes. Robin Hood is a full traditional summer camp with more than 35 activities a day. Tennis Academy is optional, so brothers and sisters can be at camp the same weeks doing sailing, riding, drama, soccer or anything else they choose.",
  },
  {
    q: "How do campers choose their activities?",
    a: "The programme is 100% elective. Campers choose two morning interest periods each week and two afternoon activities that they can change every day.",
  },
  {
    q: "How long can my child stay?",
    a: "Camp runs in one-week blocks from 27 June to 15 August 2027. Weeks are combined into sessions of 2 to 7 weeks; two-week sessions need approval from Robin Hood.",
  },
  {
    q: "Do they need to be strong swimmers?",
    a: "There are no compulsory swim classes. Campers take a two-part swim test before joining waterfront activities, and instruction runs from beginner to advanced.",
  },
  {
    q: "How do we keep in touch?",
    a: "Parents can email every day. After the first week, campers can call home up to twice a week at set times.",
  },
  {
    q: "How do we enrol?",
    a: "Tap “Request camp info”, leave your details, and Coach Mahendra will get in touch to help with enrolment. We'll also take you to Robin Hood's website to explore the camp.",
  },
];
