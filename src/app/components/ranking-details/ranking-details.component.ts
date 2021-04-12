import { Component, OnInit } from '@angular/core';
import { Ranking, RankingClientService } from 'src/app/services/ranking-client.service';

@Component({
  selector: 'app-ranking-details',
  templateUrl: './ranking-details.component.html',
  styleUrls: ['./ranking-details.component.css']
})
export class RankingDetailsComponent implements OnInit {
  ranking: Ranking;
  constructor(private rankingService:RankingClientService) { }

  ngOnInit(): void {
    this.rankingService.getRankingById(1).subscribe(value=>{
      this.ranking = value;
    });
  }

}
