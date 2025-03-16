import { Category } from '../../categories/entities/category.entity';
import { MovieView } from '../../movie-views/entities/movie-view.entity';
export declare class Movie {
    id: number;
    title: string;
    description: string;
    releaseDate: Date;
    duration: number;
    category: Category;
    category_id: number;
    views: MovieView[];
}
