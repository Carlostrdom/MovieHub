"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MovieViewsModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const movie_views_service_1 = require("./movie-views.service");
const movie_views_controller_1 = require("./movie-views.controller");
const movie_view_entity_1 = require("./entities/movie-view.entity");
const movies_module_1 = require("../movies/movies.module");
const users_module_1 = require("../users/users.module");
let MovieViewsModule = class MovieViewsModule {
};
exports.MovieViewsModule = MovieViewsModule;
exports.MovieViewsModule = MovieViewsModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([movie_view_entity_1.MovieView]),
            movies_module_1.MoviesModule,
            users_module_1.UsersModule,
        ],
        controllers: [movie_views_controller_1.MovieViewsController],
        providers: [movie_views_service_1.MovieViewsService],
    })
], MovieViewsModule);
//# sourceMappingURL=movie-views.module.js.map