import { gameList } from "../assets/games";
import GameComponent from "../components/GameComponent";
import type { Game } from "../types/gameType";

export default function GamePage() {
  return (
    <>
      <div className="m-5">
        {gameList.map((element : Game) => (
          <GameComponent game={element} />
        ))}
      </div>
    </>
  );
}