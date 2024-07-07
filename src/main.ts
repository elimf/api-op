import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  dotenv.config();
  const app = await NestFactory.create(AppModule);
  app.enableCors();

  const swaggerOptions = new DocumentBuilder()
    .setTitle('OnePiece API')
    .setDescription('The GoAway description')
    .setVersion('1.0')
    .addBearerAuth()
    .setLicense('MIT License', 'https://opensource.org/licenses/MIT')
    .build();
  const document = SwaggerModule.createDocument(app, swaggerOptions);

  const swaggerCustomOptions = {
    swaggerOptions: {
      persistAuthorization: true,
    },
    customSiteTitle: 'OnePiece Api',
    customfavIcon:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4OyqKb4XYMfiPf8JjtZ5folLelDWdAgi4yw&s',
  };
  SwaggerModule.setup('', app, document, swaggerCustomOptions);
  await app.listen(3000);
}
bootstrap();
