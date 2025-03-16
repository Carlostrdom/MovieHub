"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const config_1 = require("@nestjs/config");
const movies_module_1 = require("./movies/movies.module");
const categories_module_1 = require("./categories/categories.module");
const users_module_1 = require("./users/users.module");
const movie_views_module_1 = require("./movie-views/movie-views.module");
const database_config_1 = require("./config/database-config");
const category_entity_1 = require("./categories/entities/category.entity");
const movie_entity_1 = require("./movies/entities/movie.entity");
const user_entity_1 = require("./users/entities/user.entity");
const movie_view_entity_1 = require("./movie-views/entities/movie-view.entity");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
                load: [database_config_1.default],
            }),
            typeorm_1.TypeOrmModule.forRootAsync({
                imports: [config_1.ConfigModule],
                inject: [config_1.ConfigService],
                useFactory: (configService) => ({
                    type: 'postgres',
                    host: configService.get('database.host', 'localhost'),
                    port: configService.get('database.port', 5432),
                    username: configService.get('database.username', 'postgres'),
                    password: configService.get('database.password', 'postgres'),
                    database: configService.get('database.name', 'movies_db'),
                    entities: [category_entity_1.Category, movie_entity_1.Movie, user_entity_1.User, movie_view_entity_1.MovieView],
                    synchronize: configService.get('database.synchronize', true),
                }),
            }),
            movies_module_1.MoviesModule,
            categories_module_1.CategoriesModule,
            users_module_1.UsersModule,
            movie_views_module_1.MovieViewsModule,
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map