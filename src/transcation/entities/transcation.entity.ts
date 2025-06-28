import { ObjectType, Field, ID, Float } from '@nestjs/graphql';

@ObjectType()
export class Transaction {
  @Field(() => ID)
  id: string;

  @Field(() => Float)
  amount: number;

  @Field()
  description: string;

  @Field()
  date: Date;
}