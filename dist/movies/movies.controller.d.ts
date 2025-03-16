import { MoviesService } from './movies.service';
import { CreateMovieDto } from './dto/create-movie.dto';
import { FilterMoviesDto } from './dto/filter-movies.dto';
export declare class MoviesController {
    private readonly moviesService;
    constructor(moviesService: MoviesService);
    create(createMovieDto: CreateMovieDto): Promise<import("./entities/movie.entity").Movie>;
    findAll(filterDto: FilterMoviesDto): Promise<{
        data: import("./entities/movie.entity").Movie[];
        total: number;
        page: number;
        limit: number;
    }>;
    getNewReleases(): Promise<import("./entities/movie.entity").Movie[]>;
    findOne(id: string): Promise<import("./entities/movie.entity").Movie>;
}
