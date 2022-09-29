import "./styles/main.css";
import logoImg from "../assets/logo.svg";
import { MagnifyingGlassPlus } from "phosphor-react";
import { useEffect, useState } from "react";
import GameBanner from "./components/gamebanner";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import { Pagination } from "swiper";

interface Game {
   id: string;
   title: string;
   bannerURL: string;
}

function App() {
   const [games, setGames] = useState<Game[]>([]);
   const carouselBreakpoints = [
      { width: 1, itemsToShow: 1 },
      { width: 550, itemsToShow: 2, itemsToScroll: 2 },
      { width: 768, itemsToShow: 3 },
      { width: 1200, itemsToShow: 5 },
   ];

   const fetchData = async function () {
      const fetchGames = await fetch("http://localhost:3333/games", {
         method: "GET",
      });
      const games = await fetchGames.json();
      setGames(games);
      const uniqueGames = new Set(games);
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
            </span>
            está aqui!
         </h1>
         <Swiper
            slidesPerView={1}
            spaceBetween={10}
            pagination={{
               clickable: true,
            }}
            breakpoints={{
               "@0.00": {
                  slidesPerView: 1,
                  spaceBetween: 10,
               },
               "@0.75": {
                  slidesPerView: 2,
                  spaceBetween: 20,
               },
               "@1.00": {
                  slidesPerView: 4,
                  spaceBetween: 10,
               },
               "@1.50": {
                  slidesPerView: 5,
                  spaceBetween: 20,
               },
            }}
            modules={[Pagination]}
            className="mySwiper mt-10 mb-10"
         >
            {games.map((game) => {
               return (
                  <SwiperSlide key={game.id}>
                     <GameBanner
                        key={game.id}
                        title={game.title}
                        ads="1"
                        bannerURL={game.bannerURL}
                     />
                  </SwiperSlide>
               );
            })}
         </Swiper>

         <div className="mt-5 bg-nlw-gradient pt-1 rounded-md self-stretch overflow-hidden mt-8">
            <div className=" flex items-center justify-between bg-[#2a2634]  px-6 rounded-md">
               <div className="py-6">
                  <h1 className="text-white font-black text-2xl block">
                     Não encontrou seu duo?
                  </h1>
                  <p className="text-zinc-400 block">
                     Publique um anúncio para encontrar novos parceiros
                  </p>
               </div>

               <button className="flex items-center justify-center rounded-md bg-violet-500 py-3 px-4 gap-3 hover:bg-violet-600 transition ease-in-out duration-500">
                  <MagnifyingGlassPlus
                     color="white"
                     width={24}
                     height={24}
                  ></MagnifyingGlassPlus>
                  <span className="text-white bold text-sm">
                     Publicar um anúncio
                  </span>
               </button>
            </div>
         </div>
      </div>
   );
}

export default App;
