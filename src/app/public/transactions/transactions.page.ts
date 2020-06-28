import { Component } from '@angular/core';
import { GlobalVariablesService } from 'src/app/services/global-variables.service';
import { ApiService } from 'src/app/services/api.service';
import { UtilityProviderService } from 'src/app/services/utility-provider.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'transactions.page.html',
  styleUrls: ['transactions.page.scss'],
})
export class TransactionsPage {

  items: any = []
  infiniteScrollDisabled = false
  step = 0;
  filterSelected = "";
  constructor(
    private globalVariables: GlobalVariablesService,
    private apiService: ApiService,
    private utilityProvider: UtilityProviderService,
  ) {
    this.getData(1)
  }

  ionViewWillEnter() {
    this.globalVariables.changeCurrentRoute("/transactions")
  }
  getData(event) {
    this.step++
    if (this.step <= 5) {

      this.apiService.getAction(this.step).then((data: any) => {
        if (this.step == 1)
          this.items = data
        else
          data.forEach(element => {
            this.items.push(element);
          });
        this.globalVariables.changeTransactions(this.items)
        setTimeout(() => {
          if (this.step != 1)
            event.target.complete();

          if (data.length == 0 || this.step == 5 || this.items.length == 20) {
            {
              event.target.disabled = true;
              this.infiniteScrollDisabled = true
              this.utilityProvider.presentToast("Votre liste des transactions est à jour")
            }
          }
        }, 500);
        this.selectItem(this.filterSelected)
      })
    }
  }
  selectItem(filterSelected) {
    switch (filterSelected) {
      case "amountUp":
        this.items.sort(function (a, b) {
          return a.amount - b.amount;
        });
        break;
      case "amountDown":
        this.items.sort(function (a, b) {
          return b.amount - a.amount;
        });
        break;
      case "dateUp":
        this.items.sort(function (a, b) {
          return new Date(a.datetime).getTime() - new Date(b.datetime).getTime();
        });
        break;
      case "dateDown":
        this.items.sort(function (a, b) {
          return new Date(b.datetime).getTime() - new Date(a.datetime).getTime();
        });
        break;

      default:
        break;
    }

  }


}
