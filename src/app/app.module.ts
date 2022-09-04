import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from './modules/material/material.module';
import { NewComponent } from './pages/new/new.component';
import { CardComponent } from './components/card/card.component';
import { SubheaderComponent } from './components/subheader/subheader.component';
import { RoomPopupComponent } from './components/room-popup/room-popup.component';
import { RoomCardComponent } from './components/room-card/room-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    NewComponent,
    CardComponent,
    SubheaderComponent,
    RoomPopupComponent,
    RoomCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
