import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CookingCardsEntity } from 'src/entities/cooking-cards.entity';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
// import { cookingCardStub } from 'stubs/cookingCardStub'

@Injectable()
export class CookingCardService {
    constructor(
        @InjectRepository(CookingCardsEntity) 
        private cookingCardsRepository: Repository<CookingCardsEntity>) {}

    async getCookingCards(): Promise<CookingCardsEntity[]> {
        return await this.cookingCardsRepository.find();
    }

    async create(cookingCard: CookingCardsEntity): Promise<CookingCardsEntity>{
        return await this.cookingCardsRepository.save(cookingCard);
    }

    async update(id: number, cookingCard: CookingCardsEntity): Promise<UpdateResult>{
        return await this.cookingCardsRepository.update(id, cookingCard);
    }

    async delete(id: number): Promise<DeleteResult>{
        return await this.cookingCardsRepository.delete(id);
    }
}
