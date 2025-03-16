import { IsNotEmpty, IsString, MaxLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateCategoryDto {
  @ApiProperty({ example: 'Terror' })
  @IsNotEmpty()
  @IsString()
  @MaxLength(50)
  name: string;
}
