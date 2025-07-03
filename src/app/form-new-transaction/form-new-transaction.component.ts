import { Component, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Transaction } from '../models/transaction';
import { TransactionType } from '../types/transaction-type';
import { KeyValuePipe } from '@angular/common';

@Component({
  selector: 'app-form-new-transaction',
  imports: [FormsModule, KeyValuePipe],
  templateUrl: './form-new-transaction.component.html',
  styleUrl: './form-new-transaction.component.css',
})
export class FormNewTransactionComponent {
  transactionValue = '';
  transactionType = '';

  transactionCreated = output<Transaction>();

  enumTransactionType = TransactionType;

  onSubmit() {
    const transaction = new Transaction(
      this.transactionType as TransactionType,
      Number(this.transactionValue)
    );
    this.transactionCreated.emit(transaction);
    this.transactionType = '';
    this.transactionValue = '';
  }
}
