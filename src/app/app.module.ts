import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GetPlayerDetailsComponent } from './get-player-details/get-player-details.component';
import { RegisterPlayerDetailsComponent } from './register-player-details/register-player-details.component';
import { UpdatePlayerDetailsComponent } from './update-player-details/update-player-details.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    GetPlayerDetailsComponent,
    RegisterPlayerDetailsComponent,
    UpdatePlayerDetailsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
