import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MoviesModule } from './movies/movies.module';
import { CategoriesModule } from './categories/categories.module';
import { UsersModule } from './users/users.module';
import { MovieViewsModule } from './movie-views/movie-views.module';

import databaseConfig from './config/database-config';
import { Category } from './categories/entities/category.entity';
import { Movie } from './movies/entities/movie.entity';
import { User } from './users/entities/user.entity';
import { MovieView } from './movie-views/entities/movie-view.entity';


@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [databaseConfig],
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get('database.host', 'localhost'),
        port: configService.get<number>('database.port', 5432),
        username: configService.get('database.username', 'postgres'),
        password: configService.get('database.password', 'postgres'),
        database: configService.get('database.name', 'movies_db'),
        entities: [Category, Movie, User, MovieView],
        synchronize: configService.get('database.synchronize', true),
      }),
    }),
    MoviesModule,
    CategoriesModule,
    UsersModule,
    MovieViewsModule,
    
  ],
})
export class AppModule {}
