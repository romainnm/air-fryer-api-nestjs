import { Test, TestingModule } from '@nestjs/testing';
import { CookingCardService } from './cooking-card.service';

describe('CookingCardService', () => {
  let service: CookingCardService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CookingCardService],
    }).compile();

    service = module.get<CookingCardService>(CookingCardService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
