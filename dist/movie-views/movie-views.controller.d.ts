import { MovieViewsService } from './movie-views.service';
export declare class MovieViewsController {
    private readonly movieViewsService;
    constructor(movieViewsService: MovieViewsService);
    markAsViewed(data: {
        userId: number;
        movieId: number;
    }): Promise<import("./entities/movie-view.entity").MovieView>;
    getUsersWithMovies(): Promise<any[]>;
}
