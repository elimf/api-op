import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Haki {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  roman_name: string;

  @Column('text')
  description: string;

  @Column()
  url: string;
}
