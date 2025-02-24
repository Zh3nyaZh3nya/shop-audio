interface INews {
    id: number;
    title: string;
    date: string;
    slug: string;
    image: string;
    short_description: string;
    description: string;
}

interface IPagination {
    currentPage: number;
    totalPages: number;
    pageSize: number;
    totalItems: number;
}
