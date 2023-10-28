import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateArcDto } from './dto/create-arc.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UpdateArcDto } from './dto/update-arc.dto';
import { Arc } from './schema/arc.schema';

@Injectable()
export class ArcService {
  constructor(@InjectModel('Arc') private readonly arcModel: Model<Arc>) {}
  async create(createArcDto: CreateArcDto) {
    const createdArc = new this.arcModel(createArcDto);
    return await createdArc.save();
  }

  async findAll(): Promise<Arc[]> {
    return this.arcModel.find().exec();
  }

  async findOne(id: string): Promise<Arc> {
    const arc = await this.arcModel.findById(id).exec();

    if (!arc) {
      throw new NotFoundException(`Arc with ID ${id} not found`);
    }

    return arc;
  }

  async update(id: string, updateArcDto: UpdateArcDto): Promise<void> {
    const updatedArc = await this.arcModel.findOneAndUpdate(
      { _id: id },
      { $set: updateArcDto },
      { new: true },
    );

    if (!updatedArc) {
      throw new NotFoundException(`Arc with ID ${id} not found`);
    }
    return null;
  }

  async remove(id: string): Promise<void> {
    const removedArc = await this.arcModel.findOneAndRemove({ _id: id });

    if (!removedArc) {
      throw new NotFoundException(`Arc with ID ${id} not found`);
    }

    return null;
  }
}
