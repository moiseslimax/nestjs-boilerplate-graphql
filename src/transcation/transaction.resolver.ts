import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { CreateTransactionInput } from './dto/create-transaction.input';
import { Transaction } from './entities/transcation.entity';
import { TransactionService } from './transaction.service';

@Resolver(() => Transaction)
export class TransactionResolver {
  constructor(private readonly transactionService: TransactionService) {}

  @Mutation(() => Transaction)
  createTransaction(
    @Args('input') input: CreateTransactionInput,
  ) {
    return this.transactionService.create(input);
  }

  @Query(() => [Transaction])
  getTransactions() {
    return this.transactionService.findAll();
  }
}
