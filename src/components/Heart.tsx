"use client"
import {AiOutlineHeart, AiFillHeart} from "react-icons/ai";
import {useFavoriteStore} from "@/store/favoriteStore"
import {KeyItem} from "@/lib/types";

export function Heart({keyItem}: KeyItem) {

    const { favorites, setFavorites } = useFavoriteStore()

    return (
        favorites.includes(keyItem) ?
            <AiFillHeart id="enabled" role="svg" onClick={() => {
                const index = favorites.indexOf(keyItem);
                favorites.splice(index, 1);
                setFavorites(favorites);

            }} color="white" className="w-8 h-8 p-2 m-1 bg-gray-700 hover:bg-gray-600 rounded-full" height="100"/> :
            <AiOutlineHeart id="disabled" role="svg" onClick={() => {
                favorites.push(keyItem)
                setFavorites(favorites);

        }} color="white" className="w-8 h-8 p-2 m-1 bg-gray-700 hover:bg-gray-600 rounded-full" height="100"/>
    )
}
