import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  app.enableCors();
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );
  const swaggerOptions = new DocumentBuilder()
    .setTitle('One Piece API')
    .setDescription('Api of the One Piece adventure ')
    .setVersion('1.0')
    .addBearerAuth()
    .setLicense('MIT License', 'https://opensource.org/licenses/MIT')
    .build();

  const document = SwaggerModule.createDocument(app, swaggerOptions);

  // Define custom Swagger UI configuration
  const swaggerCustomOptions = {
    swaggerOptions: {
      persistAuthorization: true,
    },
    customSiteTitle: 'Api OnePiece Production',
    customfavIcon:
      'https://static.vecteezy.com/system/resources/previews/023/507/705/original/one-piece-logo-heart-pirate-fanart-free-png.png',
  };

  SwaggerModule.setup('', app, document, swaggerCustomOptions);
  await app.listen(process.env.PORT || 3000);
  console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
