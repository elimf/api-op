import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Saga } from '../saga/saga.entity';
import { Episode } from '../episode/episode.entity';

@Entity()
export class Arc {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column('text')
  description: string;

  @ManyToOne(() => Saga, (saga) => saga.arcs)
  saga: Saga;

  @OneToMany(() => Episode, (episode) => episode.arc)
  episodes: Episode[];
}
