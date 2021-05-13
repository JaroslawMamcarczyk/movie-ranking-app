import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GameClientService {
url:string;
  constructor(private httpClient: HttpClient) { }

  public getPlayers(): Observable<Player[]>{
    return this.httpClient.get<Player[]>('http://localhost:8080/players');
  }

  public getGames(): Observable<Game[]>{
    return this.httpClient.get<Game[]>('http://localhost:8080/games')
  }
  public getParts(): Observable<Part[]>{
    return this.httpClient.get<Part[]>('http://localhost:8080/part')
  }
  public addPart(part:PartNew){
    this.url='http://localhost:8080/part/add';
    this.httpClient.post<Part>(this.url, part)
    .subscribe(data=>part);
  }
}

export interface Player{
id:number,
name:string
}

export interface Game{
  id:number,
  date: Date,
  playerOne: Player,
  playerTwo: Player,
  playerThree: Player,
  playerFour: Player,
  playerFive: Player,
}
export interface Part{
  id: number,
  playerOneResult:number,
  playerTwoResult:number,
  playerThreeResult:number,
  playerFourResult:number,
  playerFiveResult:number,
  crupper:Player,
  gamePart: Game
}
export interface PartNew{
  playerOneResult:number,
  playerTwoResult:number,
  playerThreeResult:number,
  playerFourResult:number,
  playerFiveResult:number,
  crupper:Player,
  gamePart: Game
}
@Injectable({
  providedIn: 'root',
})
export class PlayerResolver implements Resolve<Player[]> {
  constructor(private gameService: GameClientService) { }
  
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Player[]> {
      return this.gameService.getPlayers();
}
}