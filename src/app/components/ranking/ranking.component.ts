import { Component, OnInit, } from '@angular/core';
import { Ranking, RankingClientService } from 'src/app/services/ranking-client.service';



@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.css']
})
export class RankingComponent implements OnInit {
  rankingArray: Ranking[] = [];
  constructor(private rankingClientService: RankingClientService) { }

  ngOnInit(): void {
    this.rankingClientService.getRanking().subscribe(value =>{
      this.rankingArray = value;
    })
  }

}
