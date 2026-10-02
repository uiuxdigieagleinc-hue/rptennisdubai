import type { Metadata } from "next";
import GalleryTabs from "@/components/GalleryTabs";
import PageTitle from "@/components/sections/PageTitle";
import { gallery, robinHoodGallery } from "@/content/images";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Photos from Rally Point Tennis Academy — coaching sessions, players and courts across Dubai — and from Robin Hood Camp in Maine, USA.",
  alternates: { canonical: "/gallery/" },
};

export default function GalleryPage() {
  return (
    <>
      <PageTitle>Gallery</PageTitle>
      <section className="gallery-sec" aria-label="Photo gallery">
        <div className="wrap">
          <GalleryTabs
            tabs={[
              { id: "rp-tennis", label: "RP Tennis Gallery", items: gallery },
              {
                id: "robin-hood-camp",
                label: "Robin Hood Gallery",
                items: robinHoodGallery,
                link: { href: "/robin-hood-camp/", label: "Explore Robin Hood Camp" },
              },
            ]}
          />
        </div>
      </section>
    </>
  );
}
