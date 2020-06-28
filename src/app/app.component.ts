import { Component } from '@angular/core';

import { Platform, MenuController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router, ActivatedRoute } from '@angular/router';
import { GlobalVariablesService } from './services/global-variables.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  currentRoute;
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router : Router,
    private menu: MenuController,
    private globalVariables:GlobalVariablesService
  ) {
    this.initializeApp();
    this.globalVariables.currentRoute.subscribe(res=>{
      this.currentRoute=res
    })
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
  navigateToTransactionPage(){
    this.globalVariables.changeCurrentRoute("/transactions")
    this.menu.close()
    this.router.navigate(['transactions'])
  }
  navigateToRecapitulatifPage(){
    this.globalVariables.changeCurrentRoute("/recapitulatif")
    this.menu.close()
    this.router.navigate(['recapitulatif'])
  }
  logout(){
    this.globalVariables.unauthorizeUser();
    this.menu.close()
    this.router.navigate(['bienvenue'])
  }
}
