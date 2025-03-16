import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
export declare class UsersService {
    private usersRepository;
    constructor(usersRepository: Repository<User>);
    create(createUserDto: CreateUserDto): Promise<Omit<User, 'password'>>;
    findAll(): Promise<Omit<User, 'password'>[]>;
    findOne(id: number): Promise<Omit<User, 'password'>>;
    getUserWithMovies(id: number): Promise<{
        viewedMovies: {
            id: number;
            title: string;
            category: import("../categories/entities/category.entity").Category;
            releaseDate: Date;
            viewedAt: Date;
        }[];
        id: number;
        username: string;
        email: string;
        isActive: boolean;
        movieViews: import("../movie-views/entities/movie-view.entity").MovieView[];
    }>;
}
