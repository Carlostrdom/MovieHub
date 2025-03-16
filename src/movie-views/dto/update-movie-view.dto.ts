import { PartialType } from '@nestjs/mapped-types';
import { CreateMovieViewDto } from './create-movie-view.dto';

export class UpdateMovieViewDto extends PartialType(CreateMovieViewDto) {}
