import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  HttpCode,
} from '@nestjs/common';
import { RewardService } from './reward.service';
import { CreateRewardDto } from './dto/create-reward.dto';
import { UpdateRewardDto } from './dto/update-reward.dto';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { JwtAuthAdminGuard } from 'src/auth/guards/jwt-auth-admin.guard';
import { Reward } from './schema/reward.schema';

@ApiTags('Reward')
@Controller('reward')
export class RewardController {
  constructor(private readonly rewardService: RewardService) {}

  @Post()
  @ApiBearerAuth()
  @UseGuards(JwtAuthAdminGuard)
  @ApiOperation({ summary: 'Create an Reward ' })
  @ApiResponse({
    status: 201,
    description: 'This is your new Reward',
    type: Reward,
  })
  create(@Body() createRewardDto: CreateRewardDto) {
    return this.rewardService.create(createRewardDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all Reward ' })
  @ApiResponse({
    status: 200,
    description: 'Here are all the Reward',
    type: [Reward],
  })
  findAll() {
    return this.rewardService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a specific Reward ' })
  @ApiResponse({
    status: 200,
    description: 'Here is a Reward',
    type: Reward,
  })
  findOne(@Param('id') id: string) {
    return this.rewardService.findOne(id);
  }

  @Patch(':id')
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Patch an Reward ' })
  @UseGuards(JwtAuthAdminGuard)
  @ApiResponse({
    status: 204,
    description: 'Your Reward has been changed',
  })
  @HttpCode(204)
  update(@Param('id') id: string, @Body() updateRewardDto: UpdateRewardDto) {
    return this.rewardService.update(id, updateRewardDto);
  }

  @Delete(':id')
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Delete an specific Reward ' })
  @UseGuards(JwtAuthAdminGuard)
  @ApiResponse({
    status: 204,
    description: 'Your Reward has been deleted',
  })
  @HttpCode(204)
  remove(@Param('id') id: string) {
    return this.rewardService.remove(id);
  }
}
