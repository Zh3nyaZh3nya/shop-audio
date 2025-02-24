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
    status: 'ACTIVE' | 'FINISH' | 'PENDING'
    image: string
    slug: string
}