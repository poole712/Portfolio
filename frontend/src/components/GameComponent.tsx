import { Carousel } from "./Carousel";
import type { Game } from "../types/gameType";

export default function GameComponent({ game }: { game: Game }) {
  return (
    <div className="container game-block">
      <div className="d-flex flex-row align-items-start">
        <div className="card description-box">
          <img src={game.logo} className="game-logo" alt="..." />
          <div className="card-body">
            <h4 className="card-title">{game.name}</h4>
            <p className="card-text">{game.description}</p>
            <p className="card-text">Engine: {game.engine}</p>
          </div>
          {game.gameLink && (
            <a
              href={game.gameLink}
              target="_blank"
              className="download-button"
              rel="noopener noreferrer"
            >
              Open Download Page
            </a>
          )}
        </div>
        <Carousel game={game} app={null}/>
      </div>
    </div>
  );
}
