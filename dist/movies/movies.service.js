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
exports.MoviesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const movie_entity_1 = require("./entities/movie.entity");
const categories_service_1 = require("../categories/categories.service");
const date_fns_1 = require("date-fns");
let MoviesService = class MoviesService {
    moviesRepository;
    categoriesService;
    constructor(moviesRepository, categoriesService) {
        this.moviesRepository = moviesRepository;
        this.categoriesService = categoriesService;
    }
    async create(createMovieDto) {
        await this.categoriesService.findOne(createMovieDto.category_id);
        const movie = this.moviesRepository.create(createMovieDto);
        return this.moviesRepository.save(movie);
    }
    async findAll(filterDto) {
        const { title, categoryId, page = 1, limit = 10, sortOrder = 'DESC' } = filterDto;
        const queryBuilder = this.moviesRepository
            .createQueryBuilder('movie')
            .leftJoinAndSelect('movie.category', 'category');
        if (title) {
            queryBuilder.andWhere('movie.title ILIKE :title', { title: `%${title}%` });
        }
        if (categoryId) {
            queryBuilder.andWhere('movie.category_id = :categoryId', { categoryId });
        }
        queryBuilder.orderBy('movie.releaseDate', sortOrder);
        const offset = (page - 1) * limit;
        queryBuilder.skip(offset).take(limit);
        const [data, total] = await queryBuilder.getManyAndCount();
        return {
            data,
            total,
            page,
            limit,
        };
    }
    async findOne(id) {
        const movie = await this.moviesRepository.findOne({
            where: { id },
            relations: ['category'],
        });
        if (!movie) {
            throw new common_1.NotFoundException(`Movie with ID ${id} not found`);
        }
        return movie;
    }
    async getNewReleases() {
        const threeWeeksAgo = (0, date_fns_1.subWeeks)(new Date(), 3);
        return this.moviesRepository.find({
            where: {
                releaseDate: (0, typeorm_2.MoreThanOrEqual)(threeWeeksAgo),
            },
            relations: ['category'],
            order: {
                releaseDate: 'DESC',
            },
        });
    }
};
exports.MoviesService = MoviesService;
exports.MoviesService = MoviesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(movie_entity_1.Movie)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        categories_service_1.CategoriesService])
], MoviesService);
//# sourceMappingURL=movies.service.js.map