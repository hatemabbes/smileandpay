import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { TransactionsPage } from './transactions.page';
import { ComponentsModule } from "../../components/components.module";
import { MyModuleModule } from 'src/app/modules/my-module/my-module.module';

import { TransactionsPageRoutingModule } from './transactions-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TransactionsPageRoutingModule,
    ComponentsModule,
    MyModuleModule
  ],
  declarations: [TransactionsPage]
})
export class HomePageModule {}
