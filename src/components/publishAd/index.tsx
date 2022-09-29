import { MagnifyingGlassPlus } from "phosphor-react";
import * as Dialog from "@radix-ui/react-dialog";
function PublishAd() {
   return (
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
            <Dialog.Trigger className="flex items-center justify-center rounded-md bg-violet-500 py-3 px-4 gap-3 hover:bg-violet-600 transition ease-in-out duration-500">
               <MagnifyingGlassPlus
                  color="white"
                  width={24}
                  height={24}
               ></MagnifyingGlassPlus>
               <span className="text-white bold text-sm">
                  Publicar um anúncio
               </span>{" "}
            </Dialog.Trigger>
         </div>
      </div>
   );
}

export default PublishAd;
