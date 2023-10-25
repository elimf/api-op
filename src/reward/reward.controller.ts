import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
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
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { Reward } from './schema/reward.schema';

@ApiBearerAuth()
@ApiTags('Reward')
@Controller('reward')
export class RewardController {
  constructor(private readonly rewardService: RewardService) {}

  @Post()
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
  @UseGuards(JwtAuthGuard)
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
  @UseGuards(JwtAuthGuard)
  @ApiResponse({
    status: 200,
    description: 'Here is a Reward',
    type: Reward,
  })
  findOne(@Param('id') id: string) {
    return this.rewardService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Patch an Reward ' })
  @UseGuards(JwtAuthAdminGuard)
  @ApiResponse({
    status: 204,
    description: 'Your modified Reward',
    type: Reward,
  })
  update(@Param('id') id: string, @Body() updateRewardDto: UpdateRewardDto) {
    return this.rewardService.update(+id, updateRewardDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete an specific Reward ' })
  @UseGuards(JwtAuthAdminGuard)
  @ApiResponse({
    status: 204,
    description: 'Your deleted Reward',
    type: Reward,
  })
  remove(@Param('id') id: string) {
    return this.rewardService.remove(+id);
  }
}
