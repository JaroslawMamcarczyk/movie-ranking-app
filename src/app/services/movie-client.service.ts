import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';


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

@Injectable({
  providedIn: 'root',
})
export class MovieResolver implements Resolve<Movie[]> {
  bookService: any;
  constructor(private movieService: MovieClientService) { }
  
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Movie[]> {
      return this.movieService.getMovie();
}
}