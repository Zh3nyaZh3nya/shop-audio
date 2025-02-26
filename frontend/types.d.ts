type statusPromo = 'ACTIVE' | 'FINISH' | 'PENDING'
type statusProduct = 'NEW' | 'PROMO' | 'TOP_PRODUCT'

interface INews {
    id: number;
    title: string;
    date: string;
    slug: string;
    image: string;
    short_description: string;
    description: string;
}

interface ICrumbs {
    title: string
    disabled: boolean
    href: string
}

interface IPromo {
    id: number
    title: string
    date_from: string
    date_to: string
    short_description: string
    description: string
    status: statusPromo
    image: string
    slug: string
}

interface ICategory {
    category: string
    subcategory: string
}

interface IProduct extends ICategory {
    title: string
    slug: string
    price: string | number
    image: string[]
    status?: statusProduct[]
    percent_promo?: number | null
    count: number | null
    short_description: string
    description: string
    specifications: {
        title: string
        text: string
    }[]
    reviews: {
        name: string
        date: string
        text: string
    }[],
    instructions: string
}

