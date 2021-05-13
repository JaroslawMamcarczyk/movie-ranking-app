import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common'
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieComponent } from './components/movieComponent/movie/movie.component';
import { RankingComponent } from './components/rankingComponent/ranking/ranking.component';
import { ContentComponent } from './components/templateComponent/content/content.component';
import { HeaderComponent } from './components/templateComponent/header/header.component';
import { FooterComponent } from './components/templateComponent/footer/footer.component';
import { RankingDetailsComponent } from './components/rankingComponent/ranking-details/ranking-details.component';
import { AddMovieComponent } from './components/movieComponent/add-movie/add-movie.component';
import { BrowserModule } from '@angular/platform-browser';
import { AddRankingComponent } from './components/rankingComponent/add-ranking/add-ranking.component';
import {RouterModule } from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NewGameComponent } from './remik/new-game/new-game.component';


@NgModule({
  declarations: [
    AppComponent,
    MovieComponent,
    RankingComponent,
    ContentComponent,
    HeaderComponent,
    FooterComponent,
    RankingDetailsComponent,
    AddMovieComponent,
    AddRankingComponent,
    NewGameComponent,
  ],
  imports: [
    AppRoutingModule,
    RouterModule,
    BrowserModule,
    HttpClientModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

