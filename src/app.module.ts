import { Module } from '@nestjs/common';
import { CookingCardsModule } from './cooking-cards/cooking-cards.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    CookingCardsModule,
    TypeOrmModule.forRoot({
      type: "sqlite",
      database: "airfryer.sqlite",
      entities: [__dirname + "/**/*.entity{.ts,.js}"],
      synchronize: true
    })
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
