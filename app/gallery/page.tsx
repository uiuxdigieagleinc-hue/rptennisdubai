import type { Metadata } from "next";
import GalleryGrid from "@/components/GalleryGrid";
import PageTitle from "@/components/sections/PageTitle";
import { gallery } from "@/content/images";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Photos from Rally Point Tennis Academy — coaching sessions, players and courts across Dubai.",
  alternates: { canonical: "/gallery/" },
};

export default function GalleryPage() {
  return (
    <>
      <PageTitle>Gallery</PageTitle>
      <section className="gallery-sec" aria-label="Photo gallery">
        <div className="wrap">
          <GalleryGrid items={gallery} />
        </div>
      </section>
    </>
  );
}
