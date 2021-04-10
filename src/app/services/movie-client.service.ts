import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieClientService {

  constructor(private httpClient: HttpClient) { }

public getMovie(): Observable<Movie[]>{
  return this.httpClient.get<Movie[]>('http://localhost:8080/movies');
}
}

export interface Movie{
  id: number;
  title: string;
  logo: string;
  year: number;
}