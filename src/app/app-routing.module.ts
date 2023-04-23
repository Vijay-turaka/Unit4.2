import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetPlayerDetailsComponent } from './get-player-details/get-player-details.component';
import { RegisterPlayerDetailsComponent } from './register-player-details/register-player-details.component';
import { UpdatePlayerDetailsComponent } from './update-player-details/update-player-details.component';

const routes: Routes = [
  { path: '', redirectTo: 'getDetails', pathMatch: 'full' },
  { path: 'getDetails', component: GetPlayerDetailsComponent },
  { path: 'register', component: RegisterPlayerDetailsComponent },
  { path: 'update', component: UpdatePlayerDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
