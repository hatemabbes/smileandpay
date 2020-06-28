import { Component, OnInit } from '@angular/core';
import { GlobalVariablesService } from 'src/app/services/global-variables.service';
import { ApiService } from 'src/app/services/api.service';
import { UtilityProviderService } from 'src/app/services/utility-provider.service';

@Component({
  selector: 'app-recapitulatif',
  templateUrl: './recapitulatif.page.html',
  styleUrls: ['./recapitulatif.page.scss'],
})
export class RecapitulatifPage implements OnInit {

  transactions: any = []
  credit = 0;
  buttonColor: string = "";
  stateAccount: string = " "
  debit = 0;
  total = 0;
  constructor(
    private globalVariables: GlobalVariablesService,
    private utilityProvider:UtilityProviderService
  ) {

  }

  ngOnInit() {
  }
  ionViewWillEnter() {
    this.globalVariables.changeCurrentRoute("/recapitulatif")
    this.transactions = this.globalVariables.getTransactions()
    this.transactions.forEach(element => {
      if (element.type === "crédit")
        this.credit += Number(element.amount)
      else if (element.type === "débit")
        this.debit += Number(element.amount)
    });
    this.credit = Number(this.credit.toFixed(2))
    this.debit = Number(this.debit.toFixed(2))
    this.total = this.credit - this.debit
    this.buttonColor = this.total >= 0 ? "success" : "danger"
    this.stateAccount = this.total >= 0 ? "+" : "-"

    setTimeout(() => {
      this.utilityProvider.presentToastWithMoreTime('Veuillez noter que le solde sur la page mon récapitulatif dépend du nombre des transactions affichées dans la page précédente')
    }, 2000);
  }
  

}
