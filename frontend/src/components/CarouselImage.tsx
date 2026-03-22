

export function CarouselImage({ src, isActive } : {src : string, isActive : boolean}) {
  const className = isActive ? "carousel-item active" : "carousel-item";

  const safeSrc = typeof src === "string" && src.trim() ? src.trim() : "/placeholder.png";

  return (
    <div className={className}>
      <img
        src={safeSrc}
        className="d-block w-100 game-screen"
        alt="Game screenshot"
      />
    </div>
  );
}
