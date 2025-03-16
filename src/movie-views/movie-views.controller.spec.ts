import { Test, TestingModule } from '@nestjs/testing';
import { MovieViewsController } from './movie-views.controller';
import { MovieViewsService } from './movie-views.service';

describe('MovieViewsController', () => {
  let controller: MovieViewsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MovieViewsController],
      providers: [MovieViewsService],
    }).compile();

    controller = module.get<MovieViewsController>(MovieViewsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
