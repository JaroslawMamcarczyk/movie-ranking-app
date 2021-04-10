import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieComponent } from './components/movie/movie.component';
import { RankingComponent } from './components/ranking/ranking.component';

const routes: Routes = [
  {path: 'movies', component: MovieComponent},
  {path: 'rankings', component: RankingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
