import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Ranking, RankingClientService } from 'src/app/services/ranking-client.service';
import { __param } from 'tslib';

@Component({
  selector: 'app-ranking-details',
  templateUrl: './ranking-details.component.html',
  styleUrls: ['./ranking-details.component.css']
})
export class RankingDetailsComponent implements OnInit {
  ranking: Ranking = {} as Ranking;
  id: number;
  private sub: any;
  constructor(private rankingService:RankingClientService, private actRoute: ActivatedRoute) { }

  ngOnInit(): void {
    console.log(this.actRoute.snapshot.params);
    this.sub = this.actRoute.params.subscribe(params => {
      this.id = +params['id'];
    });
    this.rankingService.getRankingById(this.id).subscribe(value=>{
      this.ranking = value;
    });
  }

}
