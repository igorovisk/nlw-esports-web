import React from "react";
import GameBanner from "../gamebanner";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css/bundle";

interface Game {
   id: string;
   title: string;
   bannerURL: string;
}

interface CarouselProps {
   data: Game[] | [];
}

function GameCarousel({ data }: CarouselProps) {
   const carouselBreakpoints = [
      { width: 1, itemsToShow: 1 },
      { width: 550, itemsToShow: 2, itemsToScroll: 2 },
      { width: 768, itemsToShow: 3 },
      { width: 1200, itemsToShow: 5 },
   ];

   return (
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
         {data.map((game) => {
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
   );
}

export default GameCarousel;
