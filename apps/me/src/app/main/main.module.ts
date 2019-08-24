import { NgModule } from '@angular/core';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main/main.component';

@NgModule({
  imports: [MainRoutingModule],
  declarations: [MainComponent],
  exports: [MainComponent],
})
export class MainModule {}
