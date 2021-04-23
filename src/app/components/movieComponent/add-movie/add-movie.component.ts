import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import { Router } from '@angular/router';
import { MovieClientService, NewMovie } from 'src/app/services/movie-client.service';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})
export class AddMovieComponent implements OnInit {
  public newMovie:FormGroup;
  constructor(
    private movieService:MovieClientService,
    private formBuilder:FormBuilder,
    private router:Router) { }

  ngOnInit(): void {
    this.newMovie = this.formBuilder.group({
        title:[''],
        logo:[''],
        year:[],
    });
  }


  public onSubmit(){
    let movie:NewMovie={
      title: this.newMovie.value.title,
      logo: this.newMovie.value.logo,
      year: this.newMovie.value.year
    }
    this.movieService.addMovie(movie);
    this.newMovie.reset();
  }

  public submit(){
    let movie:NewMovie={
      title: this.newMovie.value.title,
      logo: this.newMovie.value.logo,
      year: this.newMovie.value.year
    }
    this.movieService.addMovie(movie);
    this.router.navigate(['/movies']);
  }
}
