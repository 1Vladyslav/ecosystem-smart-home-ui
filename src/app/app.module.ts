import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecommendationsComponent } from './recommendations/recommendations.component';
import { RoomInfoComponent } from './room-info/room-info.component';

const appRoutes: Routes =[
  { path: 'recomendations', component: RecommendationsComponent},

];


@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: 'recomendations', component: RecommendationsComponent}
    ]),
  ],
  declarations: [ AppComponent, RecommendationsComponent, RoomInfoComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
