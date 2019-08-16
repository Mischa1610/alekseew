import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app/app.component';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot([], { initialNavigation: 'enabled' })
  ],
  declarations: [AppComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
