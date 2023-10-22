import { Controller, Get, Param, Delete } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from '../schemas/user.shema';
import { ObjectId } from 'mongoose';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

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
