import { Repository } from 'typeorm';
import { CreateMovieDto } from './dto/create-movie.dto';
import { FilterMoviesDto } from './dto/filter-movies.dto';
import { Movie } from './entities/movie.entity';
import { CategoriesService } from '../categories/categories.service';
export declare class MoviesService {
    private moviesRepository;
    private categoriesService;
    constructor(moviesRepository: Repository<Movie>, categoriesService: CategoriesService);
    create(createMovieDto: CreateMovieDto): Promise<Movie>;
    findAll(filterDto: FilterMoviesDto): Promise<{
        data: Movie[];
        total: number;
        page: number;
        limit: number;
    }>;
    findOne(id: number): Promise<Movie>;
    getNewReleases(): Promise<Movie[]>;
}
