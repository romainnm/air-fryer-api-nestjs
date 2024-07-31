import { Test, TestingModule } from '@nestjs/testing';
import { CookingCardsController } from './cooking-cards.controller';

describe('CookingCardsController', () => {
  let controller: CookingCardsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CookingCardsController],
    }).compile();

    controller = module.get<CookingCardsController>(CookingCardsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
