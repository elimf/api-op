import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Arc } from '../arc/arc.entity';
import { Saga } from '../saga/saga.entity';

@Entity()
export class Episode {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column('text')
  description: string;

  @Column()
  number: string;

  @Column()
  chapter: number;

  @Column()
  release_date: string;

  @ManyToOne(() => Arc, (arc) => arc.episodes)
  arc: Arc;

  @ManyToOne(() => Saga, (saga) => saga.episodes)
  saga: Saga;
}
