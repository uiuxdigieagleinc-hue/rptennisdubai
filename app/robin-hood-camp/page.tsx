import type { Metadata } from "next";
import RobinHoodCamp from "@/components/sections/RobinHoodCamp";

export const metadata: Metadata = {
  title: "Robin Hood Camp — Summer 2027 with Coach Mahi",
  description:
    "Train with Coach Mahi, Tennis Director at Robin Hood Camp in Maine, USA. Join intensive Tennis Academy weeks in summer 2027.",
  alternates: { canonical: "/robin-hood-camp/" },
};

export default function RobinHoodCampPage() {
  return <RobinHoodCamp headingLevel="h1" />;
}
