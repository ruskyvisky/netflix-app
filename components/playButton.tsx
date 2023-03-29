import react from 'react';

import { BsFillPlayFill } from 'react-icons/bs';

import { useRouter } from 'next/router';

interface playButtonProps {
    movieId : string
}

const PlayButton = ({movieId} : playButtonProps) => {
    const router = useRouter();
    return (
        <div className=" bg-white 
        rounded-md 
        py-1 
        md:py-2 
        px-2 
        md:px-4 
        w-auto 
        text-xs 
        lg:text-lg 
        font-semibold
        flex
        flex-row 
        items-center
        hover:bg-neutral-300
        transition
        cursor-pointer
        " onClick={()=>{
            router.push(`/watch/${movieId}`)
        }}>
            <BsFillPlayFill className="mr-1" size={25}/>
            Play</div>
        )
}
export default PlayButton;