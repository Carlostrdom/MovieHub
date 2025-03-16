// movie-views/movie-views.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MovieViewsService } from './movie-views.service';
import { MovieViewsController } from './movie-views.controller';
import { MovieView } from './entities/movie-view.entity';
import { MoviesModule } from '../movies/movies.module';
import { UsersModule } from '../users/users.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([MovieView]),
    MoviesModule,
    UsersModule,
  ],
  controllers: [MovieViewsController],
  providers: [MovieViewsService],
})
export class MovieViewsModule {}
