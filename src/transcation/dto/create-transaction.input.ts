import { InputType, Field, Float } from '@nestjs/graphql';

@InputType()
export class CreateTransactionInput {
  @Field(() => Float)
  amount: number;

  @Field()
  description: string;

  @Field()
  date: Date;
}