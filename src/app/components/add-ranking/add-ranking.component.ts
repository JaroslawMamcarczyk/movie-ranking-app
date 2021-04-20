import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, FormArray, FormControl, ValidatorFn} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Movie, MovieClientService } from 'src/app/services/movie-client.service';
import { NewRanking, RankingClientService } from 'src/app/services/ranking-client.service';
@Component({
  selector: 'app-add-ranking',
  templateUrl: './add-ranking.component.html',
  styleUrls: ['./add-ranking.component.css']
})
export class AddRankingComponent implements OnInit {
  public formGroup: FormGroup;
  movieArray: Movie[];

  
  constructor(
    private formBuilder: FormBuilder,
    private rankingClientService: RankingClientService,
    private movieClientService: MovieClientService,
    private activatedRoute: ActivatedRoute,
    ) { }


  ngOnInit(): void {
    this.movieArray = this.activatedRoute.snapshot.data.movie;
    this.formGroup = this.formBuilder.group({
        rankingCategory:[''],
        description:[''],
        movies: this.formBuilder.array([]),
    });
    this.createCheckbox();
  }
  
  private  createCheckbox(){
    this.movieArray.forEach(()=>{
      this.moviesFormArray.push(new FormControl(false));
    } );
  }
   get moviesFormArray() {
    return this.formGroup.controls.movies as FormArray;
  }

public onSubmit(){
  const selectedOrderIds = this.formGroup.value.movies
  .map((checked: Movie, i: number) => checked ? this.movieArray[i] : null)
      .filter((v: null) => v !== null);
      let ranking:NewRanking={
        rankingCategory: this.formGroup.value.rankingCategory,
        description: this.formGroup.value.description,
        rankingMovie: selectedOrderIds
      };
      this.rankingClientService.addRanking(ranking);
}


}

