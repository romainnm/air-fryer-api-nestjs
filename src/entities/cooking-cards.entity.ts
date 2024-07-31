import { Entity, Column, CreateDateColumn, UpdateDateColumn, PrimaryGeneratedColumn, BeforeInsert } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';

@Entity()
export class CookingCardsEntity {
   @PrimaryGeneratedColumn('uuid')
   id: string;

   @Column()
   name: string;

   @Column()
   time: number;

   @Column()
   temperature: number;

   @Column()
   rack: boolean;

   @Column()
   mode: string;

   @Column()
   numBasket: number;

   @CreateDateColumn()
   createdAt: string;

   @UpdateDateColumn()
   updatedAt: string;
}
