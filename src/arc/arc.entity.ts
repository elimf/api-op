import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Saga } from '../saga/saga.entity';

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
}
