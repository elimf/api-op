import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { ArcModule } from './arc/arc.module';
import { CrewModule } from './crew/crew.module';
import { CharacterModule } from './character/character.module';
import { RewardModule } from './reward/reward.module';
import { EventModule } from './event/event.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env', // Chemin vers le fichier .env
      isGlobal: true, // Indique que la configuration est globale et peut être utilisée partout dans l'application
    }),
    MongooseModule.forRoot(process.env.DB_URI),
    UserModule,
    AuthModule,
    ArcModule,
    CrewModule,
    CharacterModule,
    RewardModule,
    EventModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
