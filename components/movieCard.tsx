import React from "react";
import { BsFillPlayFill } from "react-icons/bs";
import {BiChevronDown} from "react-icons/bi";
import FavoriteButton from "./favoriteButton";
import { useRouter } from "next/router";
import useInfoModalStore from "@/hooks/useInfoModelStore";

interface MovieCardProps {
  data: Record<string, any>;
}

const MovieCard: React.FC<MovieCardProps> = ({ data }) => {
  const date = new Date();
  const {openModal} = useInfoModalStore(); // use custom hook to handle information modal state
  const currentYear = date.getFullYear();
  const router = useRouter();

  return (
    <div className="group bg-zinc-900 col-span relative h-[12vw]">
      {/* thumbnail image */}
      <img
        className="
        cursor-pointer 
        object-cover 
        transition 
        duration 
        shadow-xl 
        rounded-md 
        group-hover:opacity-90 
        sm:group-hover:opacity-0 
        delay-300 
        w-full 
        h-[12vw] "
        src={data.thumbnailUrl}
        alt="Thumbnail"
      />
      {/* overlay with additional information */}
      <div
        className="
      opacity-0 
      absolute 
      top-8 
      transition 
      duration-200 
      z-10 
      invisible 
      sm:visible 
      delay-300 
      w-full 
      scale-0  
      group-hover:scale-100
      group-hover:-translate-y-[6vw]
      group-hover:translate-x-2[2vw] 
      group-hover:opacity-100"
      >
        {/* larger thumbnail image */}
        <img
          src={data.thumbnailUrl}
          alt="thumbnail"
          className="
        cursor-pointer 
        object-cover
        transition 
        duration 
        shadow-xl 
        rounded-t-md
        w-full
        h-[12vw]
        "
        />
        {/* additional information */}
        <div
          className="
        z-10
        bg-zinc-800
        p-2
        lg:p-4
        absolute 
        w-full 
        transition 
        shadow-md
        rounded-b-md
        "
        >
          <div className="flex flex-row items-center gap-3">
            {/* play button */}
            <div
              className="cursor-pointer
             w-4 h-4 
             lg:w-6 
             lg:h-6
             bg-white 
             rounded-full 
             flex 
             justify-center
              items-center 
              transition
             hover:bg-neutral-300"
              onClick={() => {}}
            >
              <BsFillPlayFill 
            onClick={()=>{
              router.push(`/watch/${data?.id}`)
            }}
              className="text-black" size={20} />
            </div>
            {/* favorite button */}
            <FavoriteButton movieId={data?.id}/>
            {/* button to open information modal */}
            <div onClick={()=>{
               openModal(data?.id)
            }} className="cursor-pointer ml-auto group/item w-6 h-6 lg:w-10 lg:h-10  border-white border-2  rounded-full  flex items-center justify-center transition hover:border-neutral-300">
              <BiChevronDown size={20} className="text-white group-hover/item:text-neutral-300   "/>
            </div>
          </div>
          {/* movie release year */}
          <p className="text-green-400 font-semibold mt-4">
            New <span className="text-white ">{currentYear}</span>
          </p>
          {/* movie duration */}
          <div className="flex flex-row mt-4 gap-2 items-center ">
            <p className="text-white text-[10px] lg:text-sm">{data.duration}</p>
          </div>
          {/* movie genre */}
          <div className="flex flex-row mt-4 gap-2 items-center ">
            <p className="text-white text-[10px] lg:text-sm">{data.genre}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;