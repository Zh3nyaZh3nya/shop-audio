import { defineStore } from "pinia";
import { newsData } from "assets/staticData/newsCard";
import { promoData } from "assets/staticData/promoData";

interface RootState {
    news: INews[]
    promo: IPromo[]
}

export const useStore = defineStore("index", {
    state: (): RootState => ({
        news: newsData,
        promo: promoData
    }),
    getters: {
        GET_NEWS_MAIN: (state: RootState): INews[] => {
            return state.news.slice(0, 2)
        },
        GET_PROMO_MAIN: (state: RootState): IPromo[] => {
            return state.promo.slice(0, 2)
        },
        GET_NEWS_PAGE: (state: RootState) => (slug: string): INews | undefined => {
            return state.news.find((item: INews): boolean => item.slug === slug);
        },
        GET_PROMO_PAGE: (state: RootState) => (slug: string): IPromo | undefined => {
            return state.promo.find((item: IPromo): boolean => item.slug === slug);
        }
    }
})