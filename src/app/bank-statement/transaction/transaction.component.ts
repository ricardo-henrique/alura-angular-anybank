import { Component, input } from '@angular/core';
import { Transaction } from '../../models/transaction';
import { CurrencyPipe, DatePipe } from '@angular/common';

@Component({
  selector: 'app-transaction',
  imports: [CurrencyPipe, DatePipe],
  templateUrl: './transaction.component.html',
  styleUrl: './transaction.component.css',
})
export class TransactionComponent {
  transaction = input.required<Transaction>();
}
