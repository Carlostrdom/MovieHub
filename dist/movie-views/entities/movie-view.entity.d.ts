import { User } from '../../users/entities/user.entity';
import { Movie } from '../../movies/entities/movie.entity';
export declare class MovieView {
    id: number;
    user: User;
    user_id: number;
    movie: Movie;
    movie_id: number;
    viewedAt: Date;
}
