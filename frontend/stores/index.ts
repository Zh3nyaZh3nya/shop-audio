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
            return state.news.slice(0, 2)
        },
        GET_NEWS_PAGE: (state) => (slug: string): INews | undefined => {
            return state.news.find((item) => item.slug === slug);
        }
    }
})