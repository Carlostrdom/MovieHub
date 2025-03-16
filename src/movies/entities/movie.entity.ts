import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, JoinColumn } from 'typeorm';
import { Category } from '../../categories/entities/category.entity';
import { MovieView } from '../../movie-views/entities/movie-view.entity';

@Entity('movies')
export class Movie {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column({ type: 'text', nullable: true })
  description: string;

  @Column({ type: 'date' })
  releaseDate: Date;

  @Column({ nullable: true })
  duration: number;

  @ManyToOne(() => Category, category => category.movies)
  @JoinColumn({ name: 'category_id' })
  category: Category;

  @Column()
  category_id: number;

  @OneToMany(() => MovieView, movieView => movieView.movie)
  views: MovieView[];
}
