import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Dial {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  roman_name: string;

  @Column()
  type: string;

  @Column('text')
  description: string;
}
