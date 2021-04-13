import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from './movie-client.service';
@Injectable({
  providedIn: 'root'
})
export class RankingClientService {
  url: string;
  constructor(private httpClient: HttpClient){} 

  public getRanking(): Observable<Ranking[]>{
    return this.httpClient.get<Ranking[]>('http://localhost:8080/ranking');
  }

  public getRankingById(id: number): Observable<Ranking>{
    this.url='http://localhost:8080/ranking/{id}?id='+id;
    console.log(this.url);
    return this.httpClient.get<Ranking>(this.url);
  }

}
export interface RankingMovie {
  id: number;
  title: string;
  logo: string;
  year: number;
}

export interface Ranking {
  id: number;
  rankingCategory: string;
  description?: any;
  rankingMovie: RankingMovie[];
}