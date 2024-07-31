import { Body, Controller, Get, Post } from '@nestjs/common';
import { CookingCardsEntity } from 'src/entities/cooking-cards.entity';
import { ICookingCard } from 'src/interfaces/cooking-card.interface';
import { CookingCardService } from 'src/services/cooking-card/cooking-card.service';

@Controller('api/v1/cooking-cards')
export class CookingCardsController {

    constructor(private cookingCardService: CookingCardService) {}

    @Get()
    async getCookingCards(): Promise<CookingCardsEntity[]> {
        return this.cookingCardService.getCookingCards();
    }

    @Post()
    async addCookingCard(@Body() cookingCard: CookingCardsEntity) {
        return this.cookingCardService.create(cookingCard)
    }
}
