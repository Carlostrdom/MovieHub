import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Like, MoreThanOrEqual, LessThanOrEqual } from 'typeorm';
import { CreateMovieDto } from './dto/create-movie.dto';
import { FilterMoviesDto } from './dto/filter-movies.dto';
import { Movie } from './entities/movie.entity';
import { CategoriesService } from '../categories/categories.service';
import { subWeeks } from 'date-fns';

@Injectable()
export class MoviesService {
  constructor(
    @InjectRepository(Movie)
    private moviesRepository: Repository<Movie>,
    private categoriesService: CategoriesService,
  ) {}

  async create(createMovieDto: CreateMovieDto): Promise<Movie> {
    await this.categoriesService.findOne(createMovieDto.category_id);
    
    const movie = this.moviesRepository.create(createMovieDto);
    return this.moviesRepository.save(movie);
  }

  async findAll(filterDto: FilterMoviesDto): Promise<{ data: Movie[]; total: number; page: number; limit: number }> {
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

  async findOne(id: number): Promise<Movie> {
    const movie = await this.moviesRepository.findOne({
      where: { id },
      relations: ['category'],
    });
    
    if (!movie) {
      throw new NotFoundException(`Movie with ID ${id} not found`);
    }
    
    return movie;
  }

  async getNewReleases(): Promise<Movie[]> {
    const threeWeeksAgo = subWeeks(new Date(), 3);
    
    return this.moviesRepository.find({
      where: {
        releaseDate: MoreThanOrEqual(threeWeeksAgo),
      },
      relations: ['category'],
      order: {
        releaseDate: 'DESC',
      },
    });
  }
}