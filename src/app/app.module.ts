import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common'
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieComponent } from './components/movie/movie.component';
import { RankingComponent } from './components/ranking/ranking.component';
import { ContentComponent } from './components/content/content.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { RankingDetailsComponent } from './components/ranking-details/ranking-details.component';
import { AddMovieComponent } from './components/add-movie/add-movie.component';
import { BrowserModule } from '@angular/platform-browser';
import { AddRankingComponent } from './components/add-ranking/add-ranking.component';
import {RouterModule } from '@angular/router';


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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

