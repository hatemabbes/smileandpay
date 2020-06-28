import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { UtilityProviderService } from 'src/app/services/utility-provider.service';
import { Router } from '@angular/router';
import { GlobalVariablesService } from 'src/app/services/global-variables.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  mail: string = "";
  password: string = "";
  passwordType: string = 'password';
  passwordIcon: string = 'eye-off';
  constructor(
    private navCtrl: NavController,
    private utilityProvider: UtilityProviderService,
    private router: Router,
    private globalVariables: GlobalVariablesService
  ) { }

  ngOnInit() {
  }

  previous() {
    this.navCtrl.back();
  }
  hideShowPassword() {
    this.passwordType = this.passwordType === 'text' ? 'password' : 'text';
    this.passwordIcon = this.passwordIcon === 'eye-off' ? 'eye' : 'eye-off';
  }
  login() {
    if (this.mail !== "Hatem" || this.password !== "123456Aa") {
      this.utilityProvider.presentToast("Identifiant et/ou mot de passe incorrect(s)")
    }
    else {
      this.globalVariables.authorizeUser();
      this.router.navigate(['transactions'])

    }
  }

}
