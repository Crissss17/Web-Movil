import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express'; // Importa los tipos correctos

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  app.enableCors({
    origin: ['http://localhost:8080', 'http://localhost:8081', 'http://localhost:8081', 'http://localhost:8083'], // Especifica los orígenes permitidos
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  });

  // Middleware para manejar CORS y solicitudes OPTIONS
  app.use((req: Request, res: Response, next: NextFunction) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    if (req.method === 'OPTIONS') {
      return res.status(200).json({});
    }
    next();
  });

  app.useGlobalPipes(new ValidationPipe());
  await app.listen(8082); // Puerto del servidor NestJs
}
bootstrap();
