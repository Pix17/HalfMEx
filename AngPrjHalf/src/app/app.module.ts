import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MainComponent } from './main/main.component';
import { MirrorComponent } from './mirror/mirror.component';
import { ShopComponent } from './shop/shop.component';
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    MirrorComponent,
    ShopComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
