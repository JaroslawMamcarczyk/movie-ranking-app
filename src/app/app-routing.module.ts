import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieComponent } from './components/movieComponent/movie/movie.component';
import { RankingComponent } from './components/rankingComponent/ranking/ranking.component';
import {ContentComponent} from './components/templateComponent/content/content.component';
import { RankingDetailsComponent } from './components/rankingComponent/ranking-details/ranking-details.component';
import { AddMovieComponent } from './components/movieComponent/add-movie/add-movie.component';
import {AddRankingComponent} from './components/rankingComponent/add-ranking/add-ranking.component';
import { MovieResolver } from './services/movie-client.service';




 const routes: Routes= [
  {path: 'movies', component: MovieComponent},
  {path: 'rankings', component: RankingComponent},
  {path: 'rankings/detail/:id', component: RankingDetailsComponent},
  {path: 'addMovie', component: AddMovieComponent},
  {path: 'addRanking', 
          component: AddRankingComponent, 
           resolve:{
                movie: MovieResolver,
  }},
  {path: '', component:ContentComponent,pathMatch: 'full'},
  { path: '**', component: ContentComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
