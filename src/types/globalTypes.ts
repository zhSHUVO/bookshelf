export interface IBook {
    _id: string;
    title: string;
    author: string;
    image: string;
    price: number;
    genre: string;
    publicationDate: string;
    review?: object;
}

export type Review = {
    email: string;
    review: string;
};

