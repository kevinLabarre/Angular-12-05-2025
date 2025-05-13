import { Component } from '@angular/core';

@Component({
  selector: 'app-exercice-heritage',
  imports: [],
  templateUrl: './exercice-heritage.component.html',
  styleUrl: './exercice-heritage.component.css'
})
export class ExerciceHeritageComponent {

  consigne: string = `
  1. Créez une classe BankAccount qui étend la classe User
  2. Implémentez les propriétés suivantes :
    accountNumber : numéro de compte (chaîne de caractères)
    solde : montant disponible sur le compte (nombre)
    lastTransactionDate : date de la dernière transaction (Date ou null)
    accountType : type de compte ('courant', 'épargne' ou 'professionnel')
  3. Implémentez les méthodes suivantes :
    A. deposit(montant: number) : pour déposer de l'argent sur le compte
      Vérifiez que le montant est positif
      Mettez à jour le solde et la date de dernière transaction
    B. withdraw(montant: number) : pour retirer de l'argent du compte
      Vérifiez que le montant est positif
      Vérifiez que le solde est suffisant
      Retournez true si le retrait est réussi, false sinon
    C. get resume() : accesseur qui retourne un résumé du compte au format : "Compte [type] n°[numéro]: [nom complet] - Solde: [solde]€"
    D. Mettre à jour la variable lastTransactionDate lors de chaque transaction
  `
}
