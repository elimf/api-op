import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCrewDto } from './dto/create-crew.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UpdateCrewDto } from './dto/update-crew.dto';
import { Crew } from './schema/crew.schema';

@Injectable()
export class CrewService {
  constructor(@InjectModel('Crew') private readonly crewModel: Model<Crew>) {}
  async create(createCrewDto: CreateCrewDto) {
    const createdCrew = new this.crewModel(createCrewDto);
    return await createdCrew.save();
  }

  async findAll(): Promise<Crew[]> {
    return this.crewModel.find().exec();
  }

  async findOne(id: string): Promise<Crew> {
    const event = await this.crewModel.findById(id).exec();

    if (!event) {
      throw new NotFoundException(`Crew with ID ${id} not found`);
    }

    return event;
  }

  async update(id: string, updateCrewDto: UpdateCrewDto): Promise<void> {
    const updatedCrew = await this.crewModel.findOneAndUpdate(
      { _id: id },
      { $set: updateCrewDto },
      { new: true },
    );

    if (!updatedCrew) {
      throw new NotFoundException(`Crew with ID ${id} not found`);
    }
    return null;
  }

  async remove(id: string): Promise<void> {
    const removedCrew = await this.crewModel.findOneAndRemove({ _id: id });

    if (!removedCrew) {
      throw new NotFoundException(`Crew with ID ${id} not found`);
    }

    return null;
  }
}
