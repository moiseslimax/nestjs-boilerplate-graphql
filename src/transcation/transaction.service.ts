import { Injectable }  from "@nestjs/common";
import { CreateTransactionInput } from "./dto/create-transaction.input";
import { Transaction } from "./entities/transcation.entity";

@Injectable()
export class TransactionService {
  private transactions: Transaction[] = [];

  create(input: CreateTransactionInput): Transaction {
    const newTransaction = {
      id: Date.now().toString(),
      ...input,
    };
    this.transactions.push(newTransaction);
    return newTransaction;
  }

  findAll(): Transaction[] {
    return this.transactions;
  }
}