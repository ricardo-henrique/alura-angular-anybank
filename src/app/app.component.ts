import { Component, computed, signal } from '@angular/core';
import { BannerComponent } from './banner/banner.component';
import { FormNewTransactionComponent } from './form-new-transaction/form-new-transaction.component';
import { Transaction } from './models/transaction';
import { TransactionType } from './types/transaction-type';
import { BankStatementComponent } from './bank-statement/bank-statement.component';

@Component({
  selector: 'app-root',
  imports: [
    BannerComponent,
    FormNewTransactionComponent,
    BankStatementComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  transactions = signal<Transaction[]>([]);
  balance = computed(() => {
    return this.transactions().reduce((acc, currentTransaction) => {
      switch (currentTransaction.type) {
        case TransactionType.DEPOSITO:
          return acc + currentTransaction.value;
        case TransactionType.SAQUE:
          return acc - currentTransaction.value;
        case TransactionType.TRANSFERENCIA:
          return acc - currentTransaction.value;
        default:
          throw new Error('Tipo de transação não identificada');
      }
    }, 0);
  });
  processTransaction(transaction: Transaction) {
    if (
      transaction.type === TransactionType.SAQUE &&
      transaction.value > this.balance()
    ) {
      return alert('Saldo Insuficiente!');
    }
    this.transactions.update((currentList) => [transaction, ...currentList]);
  }
}
