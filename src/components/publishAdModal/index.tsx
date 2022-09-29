import * as Dialog from "@radix-ui/react-dialog";
import { GameController } from "phosphor-react";

function PublishAdModal() {
   return (
      <Dialog.Portal>
         <Dialog.Overlay className="bg-black/60 inset-0 fixed" />
         <Dialog.Content className="fixed bg-[#2A2634] py-8 px-10 z-50 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[480px] shadow-black/25">
            <Dialog.Title className="text-3xl font-bold">
               Publique um anúncio
            </Dialog.Title>

            <form className="flex flex-col py-3 gap-4 w-[488] justify-center align-middle ">
               <div className="flex flex-col gap-2">
                  <label htmlFor="gameName">Qual o game?</label>
                  <select
                     id="gameName"
                     className="bg-zinc-900 p-3 text-zinc-500 rounded-md"
                     placeholder="Selecione o jogo que deseja jogar"
                  >
                     <option>Map option</option>
                  </select>
               </div>
               <div className="flex flex-col gap-2">
                  <label htmlFor="name">Seu nome (ou nickname)</label>
                  <input
                     id="name"
                     className="bg-zinc-900 p-3 text-zinc-500 rounded-md"
                     placeholder="Como te chamam dentro do game?"
                  />
               </div>
               <div className="flex flex-row gap-4 ">
                  <div className="flex flex-col gap-2 w-[50%] min-w-[20%]">
                     <label htmlFor="yearsOfPlaying">
                        Joga há quantos anos?
                     </label>
                     <input
                        id="yearsOfPlaying"
                        className="bg-zinc-900 p-3 text-zinc-500 rounded-md"
                        placeholder="Tudo bem ser ZERO"
                     />
                  </div>
                  <div className="flex flex-col gap-2 w-[50%] min-w-[20%]">
                     <label htmlFor="yearsOfPlaying">
                        Joga há quantos anos?
                     </label>
                     <input
                        id="yearsOfPlaying"
                        className="bg-zinc-900 p-3 text-zinc-500 rounded-md"
                        placeholder="Tudo bem ser ZERO"
                     />
                  </div>
               </div>
               <div className="flex flex-row gap-4 ">
                  <div className="flex flex-col gap-2 w-[50%] min-w-[20%]">
                     <label htmlFor="yearsOfPlaying">
                        Quando costuma jogar?
                     </label>
                     <div className="flex gap-1">
                        <div className="flex items-center justify-center text-white bg-zinc-900 w-10 h-10 rounded-md">
                           S
                        </div>
                        <div className="flex items-center justify-center text-white bg-zinc-900 w-10 h-10 rounded-md">
                           T
                        </div>
                        <div className="flex items-center justify-center text-white bg-zinc-900 w-10 h-10 rounded-md">
                           Q
                        </div>
                        <div className="flex items-center justify-center text-white bg-zinc-900 w-10 h-10 rounded-md">
                           Q
                        </div>
                        <div className="flex items-center justify-center text-white bg-zinc-900 w-10 h-10 rounded-md">
                           S
                        </div>
                     </div>
                  </div>
                  <div className="flex flex-col gap-2 w-[50%] min-w-[20%] rounded-md ">
                     <label htmlFor="startHoursOfPlaying">
                        Qual horário do dia?
                     </label>
                     <div className="flex gap-2 justify-center">
                        <input
                           id="startHoursOfPlaying"
                           className="bg-zinc-900 p-3 text-zinc-500 w-[50%] h-10 rounded-md"
                           placeholder="De"
                           type="number"
                           max={24}
                           min={0}
                        />
                        <input
                           id="startHoursOfPlaying"
                           type="number"
                           max={24}
                           min={0}
                           className="bg-zinc-900 p-3 text-zinc-500 w-[50%] h-10 rounded-md"
                           placeholder="Até"
                        />
                     </div>
                  </div>
               </div>
               <div className="flex items-center gap-2 font-normal text-[14px] ">
                  <input
                     type="checkbox"
                     className="w-6 h-6 text-green bg-zinc-500 rounded-[4px] rounded-md"
                  />
                  <label>Costumo me conectar ao chat de voz</label>
               </div>
               <div className="flex gap-5 justify-end">
                  <Dialog.Close className="text-white bg-zinc-500 rounded-md px-5 py-4">
                     Cancelar
                  </Dialog.Close>
                  <button className="flex text-white bg-violet-500 rounded-md px-5 py-4">
                     <span className="flex items-center justify-center gap-3">
                        <GameController width={24} height={24} />{" "}
                        <p>Encontrar Duo</p>
                     </span>
                  </button>
               </div>
            </form>
         </Dialog.Content>
      </Dialog.Portal>
   );
}

export default PublishAdModal;
