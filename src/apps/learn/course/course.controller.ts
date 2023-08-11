import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Put,
} from "@nestjs/common";
import { CourseService } from "./course.service";
import { ICourse } from "./types/interfaces/course.interface";
import { CreateCourseDto } from "./types/dtos/create-course.dto";

@Controller("course")
export class CourseController {
    constructor(private readonly courseService: CourseService) {}
    @Get()
    getCourses(): ICourse[] {
        return this.courseService.getCourses();
    }

    @Get(":id")
    getOneCourse(@Param("id") id: string): ICourse {
        return this.courseService.getOneCourse(id);
    }

    @Post()
    createCourse(@Body() createCourseDto: CreateCourseDto): Promise<ICourse> {
        return this.courseService.createCourse(createCourseDto);
    }

    @Put(":id")
    updateCourse(@Param("id") id: string): string {
        return `Update course ${id}`;
    }

    @Delete(":id")
    deleteCourse(@Param("id") id: string): string {
        return `Delete course ${id}`;
    }
}
