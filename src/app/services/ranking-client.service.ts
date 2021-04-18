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
    return this.httpClient.get<Ranking>(this.url);
  }

  public addRanking(ranking:Ranking){
    this.url='http://localhost:8080/addRanking';
    this.httpClient.post<Ranking>(this.url, ranking);
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