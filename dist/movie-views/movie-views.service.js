"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MovieViewsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const movie_view_entity_1 = require("./entities/movie-view.entity");
const movies_service_1 = require("../movies/movies.service");
const users_service_1 = require("../users/users.service");
let MovieViewsService = class MovieViewsService {
    movieViewsRepository;
    moviesService;
    usersService;
    constructor(movieViewsRepository, moviesService, usersService) {
        this.movieViewsRepository = movieViewsRepository;
        this.moviesService = moviesService;
        this.usersService = usersService;
    }
    async markAsViewed(userId, movieId) {
        await this.usersService.findOne(userId);
        await this.moviesService.findOne(movieId);
        const existingView = await this.movieViewsRepository.findOne({
            where: { user_id: userId, movie_id: movieId },
        });
        if (existingView) {
            throw new common_1.BadRequestException('El usuario ya marcó esta película como vista');
        }
        const movieView = this.movieViewsRepository.create({
            user_id: userId,
            movie_id: movieId,
        });
        return this.movieViewsRepository.save(movieView);
    }
    async getUsersWithMovies() {
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
};
exports.MovieViewsService = MovieViewsService;
exports.MovieViewsService = MovieViewsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(movie_view_entity_1.MovieView)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        movies_service_1.MoviesService,
        users_service_1.UsersService])
], MovieViewsService);
//# sourceMappingURL=movie-views.service.js.map