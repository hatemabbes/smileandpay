import { NgModule } from '@angular/core';

import { NoArrowDirective } from "../../directives/no-app-arrow.directive";

@NgModule({
  declarations: [NoArrowDirective],
  exports:[NoArrowDirective]
})
export class MyModuleModule { }
