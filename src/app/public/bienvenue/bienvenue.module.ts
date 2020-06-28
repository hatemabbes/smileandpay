import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BienvenuePageRoutingModule } from './bienvenue-routing.module';
import { ComponentsModule } from '../../components/components.module';

import { BienvenuePage } from './bienvenue.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BienvenuePageRoutingModule,
    ComponentsModule
  ],
  declarations: [BienvenuePage]
})
export class BienvenuePageModule {}
