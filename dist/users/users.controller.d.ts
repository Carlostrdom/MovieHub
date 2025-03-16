import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    create(createUserDto: CreateUserDto): Promise<Omit<import("./entities/user.entity").User, "password">>;
    findAll(): Promise<Omit<import("./entities/user.entity").User, "password">[]>;
    findOne(id: string): Promise<Omit<import("./entities/user.entity").User, "password">>;
    getUserWithMovies(id: string): Promise<{
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
