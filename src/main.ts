import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    const swaggerConfig = new DocumentBuilder()
        .setTitle("API Documentation")
        .setDescription("Documentation for MediLearn public API")
        .setVersion("1.0")
        .setTermsOfService("http://swagger.io/terms/")
        .setContact("Bertrand Bouillon", "http", "bertrand.bouillon@gmail.com")
        .setLicense(
            "Apache 2.0",
            "http://www.apache.org/licenses/LICENSE-2.0.html",
        )
        .setExternalDoc("Learn NestJS", "http://learn.nestjs.com")
        .build();
    const document = SwaggerModule.createDocument(app, swaggerConfig);
    SwaggerModule.setup("api", app, document);

    await app.listen(3000);
}
bootstrap();
