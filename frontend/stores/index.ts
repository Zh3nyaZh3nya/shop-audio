import { defineStore } from "pinia";
import { newsData } from "assets/staticData/newsCard";

interface RootState {
    news: INews[]
}

export const useStore = defineStore("index", {
    state: (): RootState => ({
        news: newsData,
    }),
    getters: {
        GET_NEWS_MAIN: (state: RootState): INews[] => {
            return state.news.slice(state.news.length - 3, state.news.length)
        },
        GET_NEWS_PAGE: (state: RootState, slug: string): INews => {
            return state.news.find((item: INews): boolean => item.slug === slug)
        }
    }
})