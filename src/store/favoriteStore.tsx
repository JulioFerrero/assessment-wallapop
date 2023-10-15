import {create} from 'zustand'

interface BearState {
    favorites: any[],
    setFavorites: (favorites: any[]) => void
}

export const useFavoriteStore = create<BearState>()((set) => ({
    favorites: [],
    setFavorites: (favorites: any[]) => set({favorites})
}))
