import { MovieView } from '../../movie-views/entities/movie-view.entity';
export declare class User {
    id: number;
    username: string;
    email: string;
    password: string;
    isActive: boolean;
    movieViews: MovieView[];
}
