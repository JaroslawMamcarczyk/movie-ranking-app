import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieComponent } from './components/movie/movie.component';
import { RankingComponent } from './components/ranking/ranking.component';
import {ContentComponent} from './components/content/content.component';

const routes: Routes = [
  {path: 'movies', component: MovieComponent},
  {path: 'rankings', component: RankingComponent},
  {path: '', component:ContentComponent,pathMatch: 'full'},
  { path: '**', component: ContentComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
