import { ICategory } from "./category.interface";
export interface ICourse {
    id: string;
    title: string;
    subtitle: string;
    description: string;
    imageURL: string;
    categories: ICategory[];
    courseURL: string;
}
