import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cookieParser from 'cookie-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // const { httpAdapter }: any = app.get(HttpAdapterHost);
  // app.useGlobalFilters(new AllExceptionsFilter(httpAdapter));
  app.enableCors({
    credentials: true,
    origin: 'http://localhost:3000'
  });
  app.use(cookieParser());
  await app.listen(4000);
}

bootstrap().then();
