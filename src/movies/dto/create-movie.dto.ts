import { IsNotEmpty, IsString, IsNumber, IsDate, IsOptional } from 'class-validator';
import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class CreateMovieDto {
  @ApiProperty({ example: 'El Padrino' })
  @IsNotEmpty()
  @IsString()
  title: string;

  @ApiProperty({ example: 'Una película sobre la mafia italiana en Estados Unidos' })
  @IsOptional()
  @IsString()
  description?: string;

  @ApiProperty({ example: '1972-03-24' })
  @IsNotEmpty()
  @Type(() => Date)
  @IsDate()
  releaseDate: Date;

  @ApiProperty({ example: 175 })
  @IsOptional()
  @IsNumber()
  duration?: number;

  @ApiProperty({ example: 3 })
  @IsNotEmpty()
  @IsNumber()
  category_id: number;
}

