import { Injectable } from '@nestjs/common';
import { CreateArcDto } from './dto/create-arc.dto';
import { UpdateArcDto } from './dto/update-arc.dto';

@Injectable()
export class ArcService {
  create(createArcDto: CreateArcDto) {
    return 'This action adds a new arc';
  }

  findAll() {
    return `This action returns all arc`;
  }

  findOne(id: number) {
    return `This action returns a #${id} arc`;
  }

  update(id: number, updateArcDto: UpdateArcDto) {
    return `This action updates a #${id} arc`;
  }

  remove(id: number) {
    return `This action removes a #${id} arc`;
  }
}
