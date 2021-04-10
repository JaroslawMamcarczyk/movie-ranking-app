import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class RankingClientService {

  constructor(private httpClient: HttpClient){} 

  public getRanking(): Observable<Ranking[]>{
    return this.httpClient.get<Ranking[]>('http://localhost:8080/ranking');
  }

}
export interface Ranking{
  category: string;
  descroption: string;
}