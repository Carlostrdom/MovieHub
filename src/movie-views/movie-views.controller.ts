// movie-views/movie-views.controller.ts
import { Controller, Post, Body, Get } from '@nestjs/common';
import { MovieViewsService } from './movie-views.service';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('movie-views')
@Controller('movie-views')
export class MovieViewsController {
  constructor(private readonly movieViewsService: MovieViewsService) {}

  @Post()
  @ApiOperation({ summary: 'Marcar una película como vista por un usuario' })
  @ApiResponse({ status: 201, description: 'Vista registrada exitosamente' })
  markAsViewed(@Body() data: { userId: number; movieId: number }) {
    return this.movieViewsService.markAsViewed(data.userId, data.movieId);
  }

  @Get('users-with-movies')
  @ApiOperation({ summary: 'Obtener usuarios con las películas que han visto' })
  getUsersWithMovies() {
    return this.movieViewsService.getUsersWithMovies();
  }
}
