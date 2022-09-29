import React from "react";

interface GameBannerProps {
   bannerURL: string;
   title: string;
   ads: string;
}

function GameBanner({ title, bannerURL, ads }: GameBannerProps) {
   return (
      <a className="rounded-lg relative overflow-hidden max-w-[180] max-h-[240] hover:scale-105 transition-all duration">
         <img src={bannerURL}></img>
         <div className="w-full pt-16 pb-4 px-4 absolute bottom-0 left-0 bg-game-gradient rounded">
            <strong className="text-white font-bold block">{title}</strong>
            <p className="text-zinc-300 text-sm block mt-1">{ads} anúncios</p>
         </div>
      </a>
   );
}

export default GameBanner;
