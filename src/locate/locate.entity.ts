import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Locate {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ nullable: true })
  region_name: string;

  @Column()
  roman_name: string;

  @Column({ nullable: true })
  sea_name: string;

  @Column({ nullable: true })
  affiliation_name: string;
}
