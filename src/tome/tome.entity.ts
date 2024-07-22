import { Chapter } from 'src/chapter/chapter.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
export class Tome {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  tome_number: string;

  @Column()
  tome_japan_date_publish: string;

  @Column({ nullable: true })
  tome_french_date_publish: string;

  @OneToMany(() => Chapter, (chapter) => chapter.tome)
  chapters: Chapter[];
}
