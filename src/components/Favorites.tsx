"use client";

import {List} from "@/components/List";
import {useFavoriteStore} from "@/store/favoriteStore";
import {ListInterface} from "@/lib/types"
export function Favorites({items, limit} : ListInterface) {
    const { favorites } = useFavoriteStore()
    const filteredItems = items.filter(x => favorites.includes(x.key))
    return (
        <List items={filteredItems} limit={limit}/>
    )
}
