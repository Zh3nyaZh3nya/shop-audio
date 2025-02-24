interface INewsBase {
    id: number;
    title: string;
    date: string;
    slug: string;
    image: string;
}

interface INewsCard extends INewsBase {
    short_description: string;
}

interface INewsPage extends INewsBase {
    description: string;
}

interface IPagination {
    currentPage: number;
    totalPages: number;
    pageSize: number;
    totalItems: number;
}
