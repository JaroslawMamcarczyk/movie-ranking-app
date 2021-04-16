import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
@Component({
  selector: 'app-add-ranking',
  templateUrl: './add-ranking.component.html',
  styleUrls: ['./add-ranking.component.css']
})
export class AddRankingComponent implements OnInit {
  private formBuilder: FormBuilder;
  private formGroup: FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
        rankingCategory:[''],
        description:[''],
    });
  }

}
