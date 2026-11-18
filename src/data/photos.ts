// Add / swap photos: put files in /public/gallery/ and edit this list.
export type Pair = {
  title: string;
  caption: string;
  before: string;
  after: string;
  // "slider" = drag to compare (best when both photos are the same angle)
  // "side"   = shown side by side (use when the angles differ)
  mode: "slider" | "side";
};
export type Photo = { src: string; alt: string };

export const pairs: Pair[] = [
  {
    title: "Marble Column Base",
    caption: "Staining and buildup removed - drag the slider to compare",
    before: "/gallery/column-before.jpg",
    after: "/gallery/column-after.jpg",
    mode: "slider",
  },
  {
    title: "Vinyl Siding Wash",
    caption: "Algae and grime lifted off the siding",
    before: "/gallery/shed-before.jpg",
    after: "/gallery/shed-after.jpg",
    mode: "side",
  },
  {
    title: "Stone Wall & Canopy",
    caption: "Green algae streaks washed from the stone panels",
    before: "/gallery/wall-before.jpg",
    after: "/gallery/wall-after.jpg",
    mode: "side",
  },
];

export const exteriors: Photo[] = [
  { src: "/gallery/facade-stone.jpg", alt: "Stone and glass building exterior" },
  { src: "/gallery/facade-highrise.jpg", alt: "High-rise commercial building exterior" },
];

export const carpet: Photo = {
  src: "/gallery/carpet.jpg",
  alt: "Freshly cleaned red entrance carpet and steps",
};

export const hasGallery = pairs.length + exteriors.length > 0;
