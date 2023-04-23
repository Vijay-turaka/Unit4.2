import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-player-details',
  templateUrl: './register-player-details.component.html',
  styleUrls: ['./register-player-details.component.css'],
})
export class RegisterPlayerDetailsComponent {
  response: any = [];
  constructor(private apiService: ApiService, private routes: Router) {}

  ngOnInit(): void {}

  registerAPlayer(body: any) {
    this.response = this.apiService
      .registerPlayer(body)
      .subscribe((response: any) => {
        this.response = response?.response;
        console.log('registerPlayer', this.response);
      });
  }
  Register(
    name: string,
    runs: string,
    balls: string,
    fours: string,
    sixes: string,
    strike_rate: string
  ) {
    const body = {
      name: name,
      runs: runs,
      balls: balls,
      fours: fours,
      sixes: sixes,
      strike_rate: strike_rate,
    };
    this.registerAPlayer(body);
    this.detailsPage();
  }
  detailsPage() {
    this.routes.navigate(['/getDetails']);
  }
}
