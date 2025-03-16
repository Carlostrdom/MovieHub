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
exports.MovieViewsController = void 0;
const common_1 = require("@nestjs/common");
const movie_views_service_1 = require("./movie-views.service");
const swagger_1 = require("@nestjs/swagger");
let MovieViewsController = class MovieViewsController {
    movieViewsService;
    constructor(movieViewsService) {
        this.movieViewsService = movieViewsService;
    }
    markAsViewed(data) {
        return this.movieViewsService.markAsViewed(data.userId, data.movieId);
    }
    getUsersWithMovies() {
        return this.movieViewsService.getUsersWithMovies();
    }
};
exports.MovieViewsController = MovieViewsController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Marcar una película como vista por un usuario' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Vista registrada exitosamente' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], MovieViewsController.prototype, "markAsViewed", null);
__decorate([
    (0, common_1.Get)('users-with-movies'),
    (0, swagger_1.ApiOperation)({ summary: 'Obtener usuarios con las películas que han visto' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], MovieViewsController.prototype, "getUsersWithMovies", null);
exports.MovieViewsController = MovieViewsController = __decorate([
    (0, swagger_1.ApiTags)('movie-views'),
    (0, common_1.Controller)('movie-views'),
    __metadata("design:paramtypes", [movie_views_service_1.MovieViewsService])
], MovieViewsController);
//# sourceMappingURL=movie-views.controller.js.map