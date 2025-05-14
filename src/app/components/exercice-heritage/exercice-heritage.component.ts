import { Component } from '@angular/core';
import { BankAccount } from '../models/bank-account.model';
import { ChildBankComponent } from "../child-bank/child-bank.component";

@Component({
  selector: 'app-exercice-heritage',
  imports: [ChildBankComponent],
  templateUrl: './exercice-heritage.component.html',
  styleUrl: './exercice-heritage.component.css'
})
export class ExerciceHeritageComponent {

  bankAccount: BankAccount = new BankAccount();

  constructor() {
    this.bankAccount.solde = 1000;
    this.bankAccount.deposit(100);
    this.bankAccount.withdraw(100);
  }

  consigne: string = `
  1. Créez une classe BankAccount qui étend la classe User
  2. Implémentez les propriétés suivantes :
    accountNumber : numéro de compte (chaîne de caractères)
    solde : montant disponible sur le compte (nombre)
    lastTransactionDate : date de la dernière transaction (Date ou null)
    accountType : type de compte ('courant', 'épargne' ou 'professionnel')
  3. Implémentez les méthodes suivantes :
    A. deposit(méthode void qui prend en paramètre un montant) pour déposer de l'argent sur le compte
      Vérifiez que le montant passé en paramètre est positif
      Mettez à jour le solde et la date de dernière transaction
    B. withdraw(méthode qui renvoie un boolean et qui prend en paramètre un montant) : pour retirer de l'argent du compte
      Vérifiez que le montant passé en paramètre est positif
      Vérifiez que le solde est suffisant
      Retournez true si le retrait est réussi, false sinon
    C. get resume() : accesseur qui retourne un résumé du compte au format : "Compte [accountType] n°[accountNumber]: [fullName] - Solde: [solde]€"
    D. Mettre à jour la variable lastTransactionDate lors de chaque transaction
  `

}
