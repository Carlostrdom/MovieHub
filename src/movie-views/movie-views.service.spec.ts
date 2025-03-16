import { Test, TestingModule } from '@nestjs/testing';
import { MovieViewsService } from './movie-views.service';

describe('MovieViewsService', () => {
  let service: MovieViewsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MovieViewsService],
    }).compile();

    service = module.get<MovieViewsService>(MovieViewsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
