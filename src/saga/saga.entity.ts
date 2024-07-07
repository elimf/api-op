import { Arc } from '../arc/arc.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
export class Saga {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  saga_number: number;

  @Column()
  saga_chapter: string;

  @Column()
  saga_volume: number;

  @Column()
  saga_episode: number;

  @OneToMany(() => Arc, (arc) => arc.saga)
  arcs: Arc[];
}
