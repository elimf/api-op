import { Body, Controller, Post, Get, Param, Delete } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './schemas/user.shema';
import { ObjectId } from 'mongoose';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post()
  async createUser(
    @Body()
    user: CreateUserDto,
  ): Promise<User> {
    return this.userService.createUser(user);
  }

  @Get(':id')
  async getUser(
    @Param('id')
    id: string,
  ): Promise<User> {
    return this.userService.findOneById(id);
  }
  @Delete(':id')
  async deleteUser(
    @Param('id')
    id: ObjectId,
  ): Promise<User> {
    return this.userService.deleteOneById(id);
  }
}
