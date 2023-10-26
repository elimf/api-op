import { Module } from '@nestjs/common';
import { EventService } from './event.service';
import { EventController } from './event.controller';
import { EventSchema } from './schema/event.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Crew', schema: EventSchema }])],
  controllers: [EventController],
  providers: [EventService],
})
export class EventModule {}
