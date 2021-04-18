import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import { Ranking, RankingClientService } from 'src/app/services/ranking-client.service';
@Component({
  selector: 'app-add-ranking',
  templateUrl: './add-ranking.component.html',
  styleUrls: ['./add-ranking.component.css']
})
export class AddRankingComponent implements OnInit {
  public formGroup: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private rankingClientService: RankingClientService,
    ) { }

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
        rankingCategory:[''],
        description:[''],
    });
  }
public onSubmit(){
  console.log(this.formGroup);
}
}
