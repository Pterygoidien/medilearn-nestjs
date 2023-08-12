import { Image } from "src/global/types/interfaces/image.interface";
import { ICategory } from "./category.interface";
export interface ICourse {
    id: string;
    title: string;
    subtitle: string;
    description: string;
    image: Image;
    categories: ICategory[];
    courseURL: string;
}
