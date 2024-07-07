import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { SagasModule } from './sagas/sagas.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'onepiece',
      entities: [__dirname + '/**/*.entity{.ts,.js}'], // Chemin vers les entités
      synchronize: true, // Synchronisation automatique du schéma (attention en production)
    }),
    SagasModule,
  ],
})
export class AppModule {}
