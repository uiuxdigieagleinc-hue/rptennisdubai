// Contact form options (same as the live Gravity Form).
export const programOptions = [
  "Free Trial (45 min — Complimentary)",
  "Group Class",
  "Semi-Private",
  "Private 1-on-1",
  "Not sure",
];

export const locationOptions = ["Safa British School", "Global Indian International School", "Any / Flexible"];

export const timingOptions = [
  "Morning (before 12 PM)",
  "Afternoon (12–5 PM)",
  "Evening (5–9 PM)",
  "Weekend only",
  "Flexible / Any time",
];

export type ContactState = {
  status: "idle" | "success" | "error";
  message?: string;
  values?: Record<string, string>; // echoed back so fields keep their input after an error
  errors?: Partial<Record<"name" | "email" | "phone" | "program" | "location" | "timing" | "consent", string>>;
};
