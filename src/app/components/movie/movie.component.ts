import { Component, OnInit } from '@angular/core';
import { Movie, MovieClientService } from 'src/app/services/movie-client.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})


export class MovieComponent implements OnInit {
   movieArray: Movie[];
  constructor(private movieClientService: MovieClientService) { }

  ngOnInit(): void {
   this.movieClientService.getMovie().subscribe(value=>{
     this.movieArray = value;
   })
  }

}
