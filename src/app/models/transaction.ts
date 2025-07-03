import { nanoid } from 'nanoid';
import { TransactionType } from '../types/transaction-type';

export class Transaction {
  readonly id = nanoid();
  readonly date = new Date();
  constructor(
    public readonly type: TransactionType,
    public readonly value: number
  ) {}
}
