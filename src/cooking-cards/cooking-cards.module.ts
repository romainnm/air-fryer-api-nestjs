import { Module } from '@nestjs/common';
import { CookingCardsController } from './cooking-cards.controller';
import { CookingCardService } from 'src/services/cooking-card/cooking-card.service';
import { CookingCardsEntity } from 'src/entities/cooking-cards.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [TypeOrmModule.forFeature([CookingCardsEntity])],
    controllers: [CookingCardsController],
    providers: [CookingCardService, CookingCardsEntity],
    exports: [CookingCardService, TypeOrmModule.forFeature([CookingCardsEntity])]
})
export class CookingCardsModule {
}

