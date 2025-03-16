// movies/movies.controller.ts
import { Controller, Get, Post, Body, Param, Query, NotFoundException } from '@nestjs/common';
import { MoviesService } from './movies.service';
import { CreateMovieDto } from './dto/create-movie.dto';
import { FilterMoviesDto } from './dto/filter-movies.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('movies')
@Controller('movies')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}

  @Post()
  @ApiOperation({ summary: 'Crear una nueva película' })
  @ApiResponse({ status: 201, description: 'Película creada exitosamente' })
  async create(@Body() createMovieDto: CreateMovieDto) {
    return this.moviesService.create(createMovieDto);
  }

  @Get()
  @ApiOperation({ summary: 'Obtener todas las películas con filtros y paginación' })
  async findAll(@Query() filterDto: FilterMoviesDto) {
    return this.moviesService.findAll(filterDto);
  }

  @Get('new-releases')
  @ApiOperation({ summary: 'Obtener películas de estreno (últimas 3 semanas)' })
  async getNewReleases() {
    return this.moviesService.getNewReleases();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener una película por ID' })
  async findOne(@Param('id') id: string) {
    const movie = await this.moviesService.findOne(+id);
    if (!movie) {
      throw new NotFoundException(`Movie with ID ${id} not found`);
    }
    return movie;
  }
}
