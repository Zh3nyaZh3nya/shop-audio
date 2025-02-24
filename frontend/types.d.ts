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