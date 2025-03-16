import { OnModuleInit } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CreateCategoryDto } from './dto/create-category.dto';
import { Category } from './entities/category.entity';
export declare class CategoriesService implements OnModuleInit {
    private categoriesRepository;
    constructor(categoriesRepository: Repository<Category>);
    onModuleInit(): Promise<void>;
    create(createCategoryDto: CreateCategoryDto): Promise<Category>;
    findAll(): Promise<Category[]>;
    findOne(id: number): Promise<Category>;
}
