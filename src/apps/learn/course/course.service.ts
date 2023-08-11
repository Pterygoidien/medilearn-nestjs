import { Injectable } from "@nestjs/common";
import { ICourse } from "./types/interfaces/course.interface";
import { CreateCourseDto } from "./types/dtos/create-course.dto";

const courses: ICourse[] = [
    {
        id: "azer44sd6",
        title: "Learn NestJS",
        subtitle: "Build a full-stack application with Angular and NestJS",
        description:
            "Learn how to build a full-stack application with Angular and NestJS",
        imageURL:
            "https://storage.googleapis.com/learn_nestjs/cover_learnnestjs.png",
        categories: [
            {
                id: "1",
                name: "NestJS",
            },
        ],
        courseURL: "https://learn.nestjs.com",
    },
    {
        id: "2zearzr",
        title: "Learn Angular",
        subtitle: "Build a full-stack application with Angular and NestJS",
        description:
            "Learn how to build a full-stack application with Angular and NestJS",
        imageURL:
            "https://storage.googleapis.com/learn_nestjs/cover_learnnestjs.png",
        categories: [
            {
                id: "2",
                name: "Angular",
            },
        ],
        courseURL: "https://learn.nestjs.com",
    },
];

@Injectable()
export class CourseService {
    getCourses(): ICourse[] {
        return courses;
    }

    getOneCourse(id: string): ICourse {
        return courses.find((course) => course.id === id);
    }

    async createCourse(course: CreateCourseDto): Promise<ICourse> {
        const id = courses.length.toString() + Math.random().toString();
        const newCourse = {
            id: id,
            title: course.title,
            subtitle: course.subtitle,
            description: course.description,
            imageURL: course.imageURL,
            categories: course.categories,
            courseURL: course.courseURL,
        };

        try {
            courses.push(newCourse);
        } catch (error) {}

        return newCourse;
    }

    updateCourse(id: string, course: ICourse): ICourse {
        const index = courses.findIndex((course) => course.id === id);
        courses[index] = course;
        return course;
    }
}
