import { useCallback, useEffect, useRef, useState } from "react";
import { galleryImage, galleryPhotos, galleryThumb } from "../gallery";

/** The full-screen viewer that opens when a photo is clicked. */
function Lightbox({ index, onClose, onMove }: { index: number; onClose: () => void; onMove: (step: number) => void }) {
  const photo = galleryPhotos[index];
  const closeButton = useRef<HTMLButtonElement>(null);
  const touchStart = useRef<number | null>(null);

  // Keyboard: Esc closes, the arrow keys move between photos.
  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      else if (event.key === "ArrowRight") onMove(1);
      else if (event.key === "ArrowLeft") onMove(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose, onMove]);

  // While it is open the page behind does not scroll; focus returns to the photo that was clicked.
  useEffect(() => {
    const previous = document.activeElement as HTMLElement | null;
    document.documentElement.classList.add("lightbox-open");
    closeButton.current?.focus();
    return () => {
      document.documentElement.classList.remove("lightbox-open");
      previous?.focus?.();
    };
  }, []);

  return <div className="lightbox" role="dialog" aria-modal="true" aria-label={`Photo ${index + 1} of ${galleryPhotos.length}`} onClick={onClose}
    onTouchStart={event => { touchStart.current = event.touches[0].clientX; }}
    onTouchEnd={event => {
      if (touchStart.current === null) return;
      const moved = event.changedTouches[0].clientX - touchStart.current;
      touchStart.current = null;
      if (Math.abs(moved) > 50) onMove(moved < 0 ? 1 : -1);
    }}>
    <button className="lightbox-close" ref={closeButton} onClick={onClose} aria-label="Close">×</button>
    <button className="lightbox-arrow lightbox-prev" onClick={event => { event.stopPropagation(); onMove(-1); }} aria-label="Previous photo">←</button>
    <figure className="lightbox-figure" onClick={event => event.stopPropagation()}>
      <img src={galleryImage(photo)} alt={photo.alt} width={photo.width} height={photo.height} key={photo.file} />
      <figcaption><span>{String(index + 1).padStart(2, "0")} / {String(galleryPhotos.length).padStart(2, "0")}</span></figcaption>
    </figure>
    <button className="lightbox-arrow lightbox-next" onClick={event => { event.stopPropagation(); onMove(1); }} aria-label="Next photo">→</button>
  </div>;
}

export function Gallery() {
  const [open, setOpen] = useState<number | null>(null);
  const close = useCallback(() => setOpen(null), []);
  const move = useCallback((step: number) => setOpen(current => current === null ? current : (current + step + galleryPhotos.length) % galleryPhotos.length), []);

  return <main className="page gallery">
    <div className="page-hero">
      <p className="eyebrow">VH E-SPORTS / GALLERY</p>
      <h1>Photo<br /><em>gallery.</em></h1>
      <p className="lede">Moments from our sessions, tournaments and get-togethers. Select a photo to see it full size.</p>
    </div>
    <div className="gallery-grid">
      {galleryPhotos.map((photo, index) => <button className="gallery-item" key={photo.file} onClick={() => setOpen(index)} aria-label={`Open photo ${index + 1} of ${galleryPhotos.length}`}>
        <img src={galleryThumb(photo)} alt={photo.alt} width={photo.width} height={photo.height} loading="lazy" decoding="async" />
      </button>)}
    </div>
    {open !== null && <Lightbox index={open} onClose={close} onMove={move} />}
  </main>;
}
