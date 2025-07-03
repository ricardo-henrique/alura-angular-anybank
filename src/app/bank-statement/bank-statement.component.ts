import { Component, input } from '@angular/core';
import { TransactionComponent } from './transaction/transaction.component';
import { Transaction } from '../models/transaction';

@Component({
  selector: 'app-bank-statement',
  imports: [TransactionComponent],
  templateUrl: './bank-statement.component.html',
  styleUrl: './bank-statement.component.css',
})
export class BankStatementComponent {
  transactions = input.required<Transaction[]>();
}
