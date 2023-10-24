import { Controller, Get, Param, Delete, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './schemas/user.shema';
import { ObjectId } from 'mongoose';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';

@ApiBearerAuth()
@ApiTags('User')
@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  @ApiOperation({ summary: 'Get a specific user' })
  @ApiResponse({
    status: 200,
    description: 'Get the information of specific user by this id ',
    type: User,
  })
  async getUser(
    @Param('id')
    id: ObjectId,
  ): Promise<User | null> {
    return this.userService.findOneById(id);
  }

  //@UseGuards(JwtAuthGuard)
  @Delete(':id')
  @ApiOperation({ summary: 'Delete a specific user' })
  async deleteUser(
    @Param('id')
    id: ObjectId,
  ): Promise<User> {
    return this.userService.deleteOneById(id);
  }
}
