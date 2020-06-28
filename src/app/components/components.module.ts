import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from "@ionic/angular";
import { HeaderLogoComponent } from "./header-logo/header-logo.component";
import { TransactionComponent } from "./transaction/transaction.component";
@NgModule({
    declarations: [ 
        HeaderLogoComponent,
        TransactionComponent
     ],
    imports: [
        IonicModule, 
        CommonModule
    ],
    exports: [
        HeaderLogoComponent,
        TransactionComponent

    ],
})
export class ComponentsModule { }
