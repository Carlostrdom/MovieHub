import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, CreateDateColumn } from 'typeorm';
import { User } from '../../users/entities/user.entity';
import { Movie } from '../../movies/entities/movie.entity';

@Entity('movie_views')
export class MovieView {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, user => user.movieViews)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @Column()
  user_id: number;

  @ManyToOne(() => Movie, movie => movie.views)
  @JoinColumn({ name: 'movie_id' })
  movie: Movie;

  @Column()
  movie_id: number;

  @CreateDateColumn()
  viewedAt: Date;
}