import { Controller, Get, Param, Delete, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from '../schemas/user.shema';
import { ObjectId } from 'mongoose';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  async getUser(
    @Param('id')
    id: ObjectId,
  ): Promise<User | null> {
    return this.userService.findOneById(id);
  }

  //@UseGuards(JwtAuthGuard)
  @Delete(':id')
  async deleteUser(
    @Param('id')
    id: ObjectId,
  ): Promise<User> {
    return this.userService.deleteOneById(id);
  }
}
