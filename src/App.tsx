import "./styles/main.css";
import logoImg from "../assets/logo.svg";
import { useEffect, useState } from "react";
import GameCarousel from "./components/gamecarousel";
import PublishAdModal from "./components/publishAdModal";
import * as Dialog from "@radix-ui/react-dialog";
import PublishAd from "./components/publishAd";

interface Game {
   id: string;
   title: string;
   bannerURL: string;
}
function App() {
   const [games, setGames] = useState<Game[]>([]);

   const fetchData = async function () {
      const fetchGames = await fetch("http://localhost:3333/games", {
         method: "GET",
      });
      const games = await fetchGames.json();
      setGames(games);
      return games;
   };

   useEffect(() => {
      fetchData();
   }, []);

   return (
      <div className="max-w-[1344px] mx-auto flex flex-col items-center my-20">
         <img src={logoImg}></img>
         <h1 className="text-6xl text-white font-black mt-20   ">
            Seu{" "}
            <span className="text-transparent bg-nlw-gradient bg-clip-text">
               duo
            </span>{" "}
            está aqui!
         </h1>{" "}
         <GameCarousel data={games} />
         <Dialog.Root>
            <PublishAd />
            <PublishAdModal />
         </Dialog.Root>
      </div>
   );
}

export default App;
