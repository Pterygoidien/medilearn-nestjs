import { Module, NestModule, MiddlewareConsumer } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { CoursesModule } from "./apps/learn/course/courses.module";
import { LoggerMiddleware } from "./global/middlewares/logger.middleware";
import { ConfigModule } from "@nestjs/config";

@Module({
    imports: [CoursesModule, ConfigModule.forRoot()],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer.apply(LoggerMiddleware).forRoutes("");
    }
}
