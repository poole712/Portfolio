import { CarouselImage } from "./CarouselImage";
import type { Game } from "../types/gameType";
import type { WebApp } from "../types/webappsType";

export function Carousel({ game, app }: { game: Game | null, app : WebApp | null }) {
  const carouselId = `carousel-${game?.id ?? app?.id}`;
  const galleryImages = game?.galleryLinks ?? app?.galleryLinks

  return (
    <div className="carousel">
      {galleryImages!.length > 1 ? (
        <div id={carouselId} className="carousel slide">
          <div className="carousel-inner rounded-3">
            {galleryImages!.map((src, index) => (
              <CarouselImage key={index} src={src} isActive={index === 0} />
            ))}
          </div>

          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target={`#${carouselId}`}
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>

          <button
            className="carousel-control-next"
            type="button"
            data-bs-target={`#${carouselId}`}
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      ) : (
        <div className="mx-auto">
          <div className="">
            <img
              src={galleryImages![0]}
              alt="Game Screenshot"
              className="game-screen"
            />
          </div>
        </div>
      )}
    </div>
  );
}
