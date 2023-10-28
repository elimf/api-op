import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateEventDto } from './dto/create-event.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UpdateEventDto } from './dto/update-event.dto';
import { Event } from './schema/event.schema';

@Injectable()
export class EventService {
  constructor(
    @InjectModel('Event') private readonly eventModel: Model<Event>,
  ) {}
  async create(createEventDto: CreateEventDto) {
    const createdEvent = new this.eventModel(createEventDto);
    return await createdEvent.save();
  }

  async findAll(): Promise<Event[]> {
    return this.eventModel.find().exec();
  }

  async findOne(id: string): Promise<Event> {
    const event = await this.eventModel.findById(id).exec();

    if (!event) {
      throw new NotFoundException(`Event with ID ${id} not found`);
    }

    return event;
  }

  async update(id: string, updateEventDto: UpdateEventDto): Promise<Event> {
    const updatedEvent = await this.eventModel.findOneAndUpdate(
      { _id: id },
      { $set: updateEventDto },
      { new: true },
    );

    if (!updatedEvent) {
      throw new NotFoundException(`Event with ID ${id} not found`);
    }
    return updatedEvent;
  }

  async remove(id: string): Promise<Event> {
    const removedArc = await this.eventModel.findOneAndRemove({ _id: id });

    if (!removedArc) {
      throw new NotFoundException(`Event with ID ${id} not found`);
    }

    return removedArc;
  }
}
