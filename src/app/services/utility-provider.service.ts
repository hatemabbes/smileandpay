import { Injectable } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class UtilityProviderService {

  constructor(
    private alertCtrl: AlertController,
    private toastCtrl: ToastController
  ) { }

  async presentAlert(subHeader, message) {
    const alert = await this.alertCtrl.create({
      header: 'Attention',
      subHeader: subHeader,
      message: message,
      buttons: ['OK']
    });

    await alert.present();
  }

  async presentAlertConfirm(subHeader, message, array) {
    const alert = await this.alertCtrl.create({
      header: 'Attention',
      subHeader: subHeader,
      message: message,
      buttons: array
    });

    await alert.present();
  }

  async presentToast(message) {
    const toast = await this.toastCtrl.create({
      message: message,
      duration: 3000,
      position: "top",
      buttons: [
        {
          text: 'Ok',
          role: 'cancel',
          handler: () => {
            toast.dismiss()
          }
        }
      ],
      color:"primary",
      
    });
    toast.present();
  }
  async presentToastWithMoreTime(message) {
    const toast = await this.toastCtrl.create({
      message: message,
      duration: 5000,
      position: "top",
      buttons: [
        {
          text: 'Ok',
          role: 'cancel',
          handler: () => {
            toast.dismiss()
          }
        }
      ],
      color:"primary",
      
    });
    toast.present();
  }
}
