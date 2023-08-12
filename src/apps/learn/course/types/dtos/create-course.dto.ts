import { ApiProperty } from "@nestjs/swagger";
import { ICategory } from "../interfaces/category.interface";
import { Image } from "src/global/types/interfaces/image.interface";
export class CreateCourseDto {
    @ApiProperty({ description: "The title of the course" })
    title: string;
    @ApiProperty({ description: "The subtitle of the course" })
    subtitle: string;
    @ApiProperty({ description: "The description of the course" })
    description: string;
    @ApiProperty({ description: "The image URL of the course" })
    image: Image;
    @ApiProperty({ description: "The categories of the course" })
    categories: ICategory[];
    @ApiProperty({ description: "The course URL of the course" })
    courseURL: string;
}
