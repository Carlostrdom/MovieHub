import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { MovieView } from '../../movie-views/entities/movie-view.entity';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  username: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column({ default: true })
  isActive: boolean;

  @OneToMany(() => MovieView, movieView => movieView.user)
  movieViews: MovieView[];
}
