
// movie-views/movie-views.service.ts
import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MovieView } from './entities/movie-view.entity';
import { MoviesService } from '../movies/movies.service';
import { UsersService } from '../users/users.service';

@Injectable()
export class MovieViewsService {
  constructor(
    @InjectRepository(MovieView)
    private movieViewsRepository: Repository<MovieView>,
    private moviesService: MoviesService,
    private usersService: UsersService,
  ) {}

  async markAsViewed(userId: number, movieId: number): Promise<MovieView> {
    // Verificar que el usuario y la película existen
    await this.usersService.findOne(userId);
    await this.moviesService.findOne(movieId);
    
    // Verificar si ya existe un registro
    const existingView = await this.movieViewsRepository.findOne({
      where: { user_id: userId, movie_id: movieId },
    });
    
    if (existingView) {
      throw new BadRequestException('El usuario ya marcó esta película como vista');
    }
    
    // Crear nuevo registro de vista
    const movieView = this.movieViewsRepository.create({
      user_id: userId,
      movie_id: movieId,
    });
    
    return this.movieViewsRepository.save(movieView);
  }

  async getUsersWithMovies() {
    // Usar relaciones para obtener usuarios con sus películas vistas
    const users = await this.movieViewsRepository
      .createQueryBuilder('movieView')
      .leftJoinAndSelect('movieView.user', 'user')
      .leftJoinAndSelect('movieView.movie', 'movie')
      .leftJoinAndSelect('movie.category', 'category')
      .select([
        'user.id', 
        'user.username', 
        'user.email',
        'movie.id',
        'movie.title',
        'movie.releaseDate',
        'category.name',
        'movieView.viewedAt'
      ])
      .getMany();
    
    // Agrupar los resultados por usuario
    const usersMap = new Map();
    
    users.forEach(view => {
      const { user, movie, viewedAt } = view;
      
      if (!usersMap.has(user.id)) {
        usersMap.set(user.id, {
          id: user.id,
          username: user.username,
          email: user.email,
          viewedMovies: [],
        });
      }
      
      usersMap.get(user.id).viewedMovies.push({
        id: movie.id,
        title: movie.title,
        category: movie.category,
        releaseDate: movie.releaseDate,
        viewedAt,
      });
    });
    
    return Array.from(usersMap.values());
  }
}