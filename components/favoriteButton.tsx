
import React from "react";
import axios from "axios";
import { AiOutlinePlus ,AiOutlineCheck } from "react-icons/ai";
import {useCallback, useMemo} from "react";
import useFavorites from "@/hooks/useFavorites";
import useCurrentUser from "@/hooks/useCurrentUser";

interface FavoriteButtonProps {
    movieId: string;
}

const FavoriteButton: React.FC<FavoriteButtonProps> = ({movieId}) => {
    const {mutate : mutateFavorites} = useFavorites();
    const {data : currentUser ,mutate} = useCurrentUser();

    const isFavorite = useMemo(() => {
        const list = currentUser?.favoriteIds  || [];
        return list.includes(movieId);
    }, [currentUser,movieId]);

    const toggleFavorites = useCallback(async () => {
        let response;
        
        if(isFavorite) {
            response = await axios.delete(`/api/favorite`,{data: {movieId}});
        }
        else{
            response = await axios.post(`/api/favorite`,{movieId});
        }
        const updatedFavorites = response?.data?.favoriteIds;

        mutate({ 
            ...currentUser, 
            favoriteIds: updatedFavorites,
          });
          mutateFavorites();
    },[movieId, isFavorite, currentUser, mutate, mutateFavorites])

    const Icon = isFavorite ? AiOutlineCheck : AiOutlinePlus;
return (
    <div 
    onClick={toggleFavorites}
    className="
    cursor-pointer
    group/item
    w-2 h-2 
    lg:w-6 lg:h-6
    border-white
    border-2 
    rounded-full
    flex 
    justify-center
    items-center
    transition
    hover:border-neutral-300
    ">
        <Icon className="text-white group-hover/item:text-neutral-300 w-4 lg:w-6 " size={25}/>

    </div>
)
}

export default FavoriteButton;