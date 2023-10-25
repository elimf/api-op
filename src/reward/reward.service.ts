import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateRewardDto } from './dto/create-reward.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UpdateRewardDto } from './dto/update-reward.dto';
import { Reward } from './schema/reward.schema';

@Injectable()
export class RewardService {
  constructor(
    @InjectModel('Reward') private readonly rewardModel: Model<Reward>,
  ) {}
  async create(createRewardDto: CreateRewardDto) {
    const createdArc = new this.rewardModel(createRewardDto);
    return await createdArc.save();
  }

  async findAll() {
    return this.rewardModel.find().exec();
  }

  async findOne(id: number) {
    const arc = await this.rewardModel.findById(id).exec();

    if (!arc) {
      throw new NotFoundException(`Reward with ID ${id} not found`);
    }

    return arc;
  }

  async update(id: number, updateRewardDto: UpdateRewardDto) {
    const updatedArc = await this.rewardModel.findOneAndUpdate(
      { _id: id },
      { $set: updateRewardDto },
      { new: true },
    );

    if (!updatedArc) {
      throw new NotFoundException(`Reward with ID ${id} not found`);
    }
    return updatedArc;
  }

  async remove(id: number) {
    const removedArc = await this.rewardModel.findOneAndRemove({ _id: id });

    if (!removedArc) {
      throw new NotFoundException(`Reward with ID ${id} not found`);
    }

    return removedArc;
  }
}
