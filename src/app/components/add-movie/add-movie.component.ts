import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})
export class AddMovieComponent implements OnInit {
  public newMovie:FormGroup;
  private formBuilder:FormBuilder;
  constructor() { }

  ngOnInit(): void {
    this.newMovie = this.formBuilder.group({
        title:[''],
        logo:[''],
        year:[],
    });
  }

}
