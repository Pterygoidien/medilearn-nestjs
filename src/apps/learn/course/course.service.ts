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
        image: {
            imageUrl:
                "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera_assets/ddp/branding/bcs-uol/thumbnail.jpg?auto=format%2Ccompress%2C%20enhance&dpr=2&w=265&h=204&fit=crop&q=50",
            imageAlt: "Learn NestJS",
            imageDimensions: {
                width: 530,
                height: 408,
            },
        },
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
        image: {
            imageUrl:
                "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera_assets/ddp/branding/bcs-uol/thumbnail.jpg?auto=format%2Ccompress%2C%20enhance&dpr=2&w=265&h=204&fit=crop&q=50",
            imageAlt: "Learn NestJS",
            imageDimensions: {
                width: 530,
                height: 408,
            },
        },
        categories: [
            {
                id: "2",
                name: "Angular",
            },
        ],
        courseURL: "https://learn.nestjs.com",
    },
    {
        id: "3zearzr",
        title: "Learn React",
        subtitle: "Build a full-stack application with Angular and NestJS",
        description:
            "Learn how to build a full-stack application with Angular and NestJS",
        image: {
            imageUrl:
                "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera_assets/ddp/branding/bcs-uol/thumbnail.jpg?auto=format%2Ccompress%2C%20enhance&dpr=2&w=265&h=204&fit=crop&q=50",
            imageAlt: "Learn NestJS",
            imageDimensions: {
                width: 530,
                height: 408,
            },
        },
        categories: [
            {
                id: "3",
                name: "React",
            },
        ],
        courseURL: "https://learn.nestjs.com",
    },
    {
        id: "4zearzr",
        title: "Learn Vue",
        subtitle: "Build a full-stack application with Angular and NestJS",
        description:
            "Learn how to build a full-stack application with Angular and NestJS",
        image: {
            imageUrl:
                "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera_assets/ddp/branding/bcs-uol/thumbnail.jpg?auto=format%2Ccompress%2C%20enhance&dpr=2&w=265&h=204&fit=crop&q=50",
            imageAlt: "Learn NestJS",
            imageDimensions: {
                width: 530,
                height: 408,
            },
        },
        categories: [
            {
                id: "4",
                name: "Vue",
            },
        ],
        courseURL: "https://learn.nestjs.com",
    },
    {
        id: "5zearzr",
        title: "Learn Svelte",
        subtitle: "Build a full-stack application with Angular and NestJS",
        description:
            "Learn how to build a full-stack application with Angular and NestJS",
        image: {
            imageUrl:
                "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera_assets/ddp/branding/bcs-uol/thumbnail.jpg?auto=format%2Ccompress%2C%20enhance&dpr=2&w=265&h=204&fit=crop&q=50",
            imageAlt: "Learn NestJS",
            imageDimensions: {
                width: 530,
                height: 408,
            },
        },
        categories: [
            {
                id: "5",
                name: "Svelte",
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
            image: {
                imageUrl: course.image.imageUrl,
                imageAlt: course.image.imageAlt,
                imageDimensions: {
                    width: course.image.imageDimensions.width,
                    height: course.image.imageDimensions.height,
                },
            },
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
