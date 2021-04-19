import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, FormArray, FormControl} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Movie, MovieClientService } from 'src/app/services/movie-client.service';
import { Ranking, RankingClientService } from 'src/app/services/ranking-client.service';
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
    console.log(this.movieArray.length);
    this.createCheckbox();
  }
  
  private  createCheckbox(){
    this.movieArray.forEach(()=>{
      console.log(this.movieArray.length);
      this.moviesFormArray.push(new FormControl(false));
      console.log(this.moviesFormArray.length);
    } );
  }
   get moviesFormArray() {
    return this.formGroup.controls.movies as FormArray;
  }

public onSubmit(){
 
}
}
