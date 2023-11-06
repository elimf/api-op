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

  async findAll(): Promise<Reward[]> {
    return this.rewardModel.find().exec();
  }

  async findOne(id: string): Promise<Reward> {
    const reward = await this.rewardModel.findById(id).exec();

    if (!reward) {
      throw new NotFoundException(`Reward with ID ${id} not found`);
    }

    return reward;
  }

  async update(id: string, updateRewardDto: UpdateRewardDto): Promise<void> {
    const updatedArc = await this.rewardModel.findOneAndUpdate(
      { _id: id },
      { $set: updateRewardDto },
      { new: true },
    );

    if (!updatedArc) {
      throw new NotFoundException(`Reward with ID ${id} not found`);
    }
    return null;
  }

  async remove(id: string): Promise<void> {
    const removedArc = await this.rewardModel.findOneAndRemove({ _id: id });

    if (!removedArc) {
      throw new NotFoundException(`Reward with ID ${id} not found`);
    }

    return null;
  }
}
