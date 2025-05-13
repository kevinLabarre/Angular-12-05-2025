import { Component, Input } from '@angular/core';
import { BankAccount } from '../../models/bank-account.model';

@Component({
  selector: 'app-child-bank',
  imports: [],
  templateUrl: './child-bank.component.html',
  styleUrl: './child-bank.component.css'
})
export class ChildBankComponent {
  @Input() solde?: number;
}
