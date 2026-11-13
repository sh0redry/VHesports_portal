/**
 * The photo gallery. Every photo listed here appears on the Gallery page, and the
 * landscape ones also rotate in the "Community highlights" slider on the homepage.
 *
 * To add a photo:
 *   1. Put the full-size file in public/images/gallery/ (1600-1700 px on the long side is plenty).
 *   2. Put a 640 px wide copy with the same name in public/images/gallery/thumbs/.
 *   3. Add a line below with its file name, a short description and its pixel size.
 * The order here is the order on the page.
 */
export type GalleryPhoto = {
  file: string;
  /** What the photo shows. Not displayed: it is read by screen readers and search engines. */
  alt: string;
  width: number;
  height: number;
};

export const galleryPhotos: GalleryPhoto[] = [
  { file: "01-console-night-crew.jpg", alt: "A group of players posing around a red sofa after a console games session", width: 1706, height: 1279 },
  { file: "02-community-gathering.jpg", alt: "A large group of VH E-Sports members gathered in a seminar room", width: 1707, height: 1280 },
  { file: "03-valorant-night.jpg", alt: "Players wearing headsets at rows of gaming PCs in the NUS E-Sports room", width: 1706, height: 1279 },
  { file: "04-full-house.jpg", alt: "A busy PC gaming session with every seat taken", width: 1706, height: 1279 },
  { file: "05-after-the-session.jpg", alt: "A group photo of players giving thumbs up in the E-Sports room after a session", width: 1706, height: 1279 },
  { file: "06-overcooked-big-screen.jpg", alt: "Players around a meeting table playing Overcooked on a projector screen", width: 1280, height: 1700 },
  { file: "07-locked-in.jpg", alt: "Players concentrating at gaming PCs in a dimly lit room", width: 1706, height: 1279 },
  { file: "08-scrim-time.jpg", alt: "A team practising together on gaming PCs", width: 1706, height: 1279 },
  { file: "09-warming-up.jpg", alt: "Players setting up at their PCs before a session", width: 1448, height: 1086 },
  { file: "10-agent-select.jpg", alt: "Players choosing their agents at the start of a VALORANT match", width: 1448, height: 1086 },
  { file: "11-console-corner.jpg", alt: "A hand holding a game controller in front of a TV showing a co-op game", width: 1279, height: 1706 },
];

export const galleryImage = (photo: GalleryPhoto) => `/images/gallery/${encodeURIComponent(photo.file)}`;
export const galleryThumb = (photo: GalleryPhoto) => `/images/gallery/thumbs/${encodeURIComponent(photo.file)}`;
