import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app/app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { PersonComponent } from './person/person.component';
import { AddressComponent } from './address/address.component';
import { CommonModule } from '@angular/common';
import { AppService } from './app.service';
import { WikiService } from './wiki.service';
import { WikiComponent } from './wiki/wiki.component';

@NgModule({
  declarations: [AppComponent, PersonComponent, AddressComponent, WikiComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CommonModule,
    MaterialModule,
  ],
  providers: [AppService, WikiService],
  bootstrap: [AppComponent],
})
export class AppModule {}
