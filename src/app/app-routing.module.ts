import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieComponent } from './components/movie/movie.component';
import { RankingComponent } from './components/ranking/ranking.component';
import {ContentComponent} from './components/content/content.component';
import { RankingDetailsComponent } from './components/ranking-details/ranking-details.component';


const routes: Routes = [
  {path: 'movies', component: MovieComponent},
  {path: 'rankings', component: RankingComponent},
  {path: 'rankings/ detail:id', component: RankingDetailsComponent},
  {path: '', component:ContentComponent,pathMatch: 'full'},
  { path: '**', component: ContentComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
