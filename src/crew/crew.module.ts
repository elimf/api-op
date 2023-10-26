import { Module } from '@nestjs/common';
import { CrewService } from './crew.service';
import { CrewController } from './crew.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { CrewSchema } from './schema/crew.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Crew', schema: CrewSchema }])],
  controllers: [CrewController],
  providers: [CrewService],
})
export class CrewModule {}
