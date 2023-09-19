import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductPreviewCardComponent } from './components/product-preview-card/product-preview-card.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductPreviewCardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
