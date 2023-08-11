import { Injectable, NestMiddleware } from "@nestjs/common";
import { Request, Response, NextFunction } from "express";
@Injectable()
export class LoggerMiddleware implements NestMiddleware {
    use(req: Request, res: Response, next: NextFunction) {
        console.log(
            `[${new Date().toLocaleDateString()} - ${new Date().toLocaleTimeString()}] ${req.method.toUpperCase()} ${
                req.url
            } - ${req.ip} - ${req.headers["user-agent"]}`,
        );

        if (next) {
            next();
        }
    }
}
