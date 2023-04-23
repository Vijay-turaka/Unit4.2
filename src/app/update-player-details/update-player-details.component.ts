import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-player-details',
  templateUrl: './update-player-details.component.html',
  styleUrls: ['./update-player-details.component.css'],
})
export class UpdatePlayerDetailsComponent {
  response: any = [];
  id: any;
  data: any;
  constructor(
    private apiService: ApiService,
    private route: ActivatedRoute,
    private routes: Router
  ) {}

  ngOnInit(): void {
    this.data = window.history.state;
    this.route.queryParams.subscribe((params) => {
      this.id = params['id'];
      console.log('id', params['id']);
    });
  }

  updatePlayer(body: any, id: any) {
    this.apiService.updatePlayerApi(body, id).subscribe((response: any) => {
      this.response = response?.response;
      console.log('update player', this.response);
    });
  }
  Update(
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
    this.updatePlayer(body, this.id);
    this.detailsPage();
  }
  detailsPage() {
    this.routes.navigate(['/getDetails']);
  }
}
