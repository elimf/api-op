import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { SagasModule } from './saga/saga.module';
import { LocatesModule } from './locate/locate.module';
import { DialModule } from './dial/dial.module';
import { HakiModule } from './haki/haki.module';
import { ArcModule } from './arc/arc.module';
@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT, 10) || 3306,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    ArcModule,
    DialModule,
    HakiModule,
    LocatesModule,
    SagasModule,
  ],
})
export class AppModule {}
