import { Repository } from 'typeorm';
import { MovieView } from './entities/movie-view.entity';
import { MoviesService } from '../movies/movies.service';
import { UsersService } from '../users/users.service';
export declare class MovieViewsService {
    private movieViewsRepository;
    private moviesService;
    private usersService;
    constructor(movieViewsRepository: Repository<MovieView>, moviesService: MoviesService, usersService: UsersService);
    markAsViewed(userId: number, movieId: number): Promise<MovieView>;
    getUsersWithMovies(): Promise<any[]>;
}
