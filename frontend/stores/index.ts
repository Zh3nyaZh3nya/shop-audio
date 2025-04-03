import { defineStore } from "pinia";
import { newsData } from "assets/staticData/newsCard";
import { promoData } from "assets/staticData/promoData";
import { categoriesData } from "assets/staticData/categoriesData";
import { productsData } from "assets/staticData/productsData";

interface RootState {
    news: INews[]
    promo: IPromo[]
    categories: ICategory[]
    products: IProduct[]
    favorites: IProduct[]
    cart: IProductCart[]
}

export const useStore = defineStore("index", {
    state: (): RootState => ({
        news: newsData,
        promo: promoData,
        categories: categoriesData,
        products: productsData,
        favorites: [],
        cart: []
    }),
    actions: {
        setCart(product: IProduct, count: number, action: 'add' | 'remove' = 'add') {
            if(action === 'add') {
                this.cart.push({
                    ...product,
                    countCart: count
                })
            } else {
                this.cart = this.cart.filter((item: IProductCart) => item.title !== product.title)
            }
        },
        setFavorites(product: IProduct, action: 'add' | 'remove' = 'add') {
            if (action === 'add') {
                this.favorites = [...(this.favorites || []), product]
            } else {
                this.favorites = (this.favorites || []).filter(item => item.title !== product.title)
            }
        }
    },
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
        },
        GET_STATUS_PRODUCTS: (state: RootState) => (status: statusProduct, isMain: boolean = false): IProduct[] => {
            const filterProducts: IProduct[] = state.products.filter((item: IProduct) => Boolean(item.status?.includes(status)))
            if(isMain) {
                return filterProducts.slice(0, 7)
            }
            return filterProducts
        },
        GET_PRODUCT_SLUG: (state: RootState) => (slug: string): IProduct | undefined => {
            return state.products.find((item: IProduct): boolean => item.slug === slug)
        }
    }
})