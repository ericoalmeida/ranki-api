import { ArgumentsHost, Catch, ExceptionFilter, HttpException, HttpStatus } from "@nestjs/common";

@Catch()
class AllExceptionsFilter implements ExceptionFilter {
    
    catch(exception: unknown, host: ArgumentsHost): any{
        const ctx = host.switchToHttp();
        const request = ctx.getRequest();
        const response = ctx.getResponse();

        const status = exception instanceof HttpException
        ? exception.getStatus()
        : HttpStatus.INTERNAL_SERVER_ERROR;

        const message = exception instanceof HttpException 
        ? exception.getResponse() 
        : exception;

        response.status(status).json({
            timestamp: new Date().toISOString(),
            path: request.url,
            error: message
        })

    }
}

export default AllExceptionsFilter