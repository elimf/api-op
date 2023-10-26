import { Module } from '@nestjs/common';
import { ArcService } from './arc.service';
import { ArcController } from './arc.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ArcSchema } from './schema/arc.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Arc', schema: ArcSchema }])],
  controllers: [ArcController],
  providers: [ArcService],
})
export class ArcModule {}
