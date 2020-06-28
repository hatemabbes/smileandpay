import { Component, OnInit, Input } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { UtilityProviderService } from 'src/app/services/utility-provider.service';

@Component({
  selector: 'transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.scss'],
})
export class TransactionComponent implements OnInit {
  transaction;
  transactions;

  @Input()
  set item(item) {
    this.transaction = item;
  }

  @Input()
  set items(items) {
    this.transactions = items;
  }

  constructor(
    private alertController: AlertController,
    private utilityProvider: UtilityProviderService
    ) { }

  ngOnInit() { }


  async deleteItem(item) {
    const alert = await this.alertController.create({
      header: 'Attention !',
      message: "Voulez-vous <strong>supprimer</strong> l'événement ?",
      backdropDismiss: false,
      buttons: [
        {
          text: 'Annuler',
          role: 'cancel',
          handler: () => {

          }
        }, {
          text: 'Supprimer',
          handler: () => {
            this.transactions.splice(this.transactions.indexOf(item), 1);
            this.utilityProvider.presentToast('La transaction a été supprimée avec succès.')
          }
        }
      ]
    });

    await alert.present();


  }
}
