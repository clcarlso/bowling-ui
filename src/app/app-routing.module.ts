import { LeaderboardPageComponent } from './leaderboard-page/leaderboard-page.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GamePageComponent } from './game-page/game-page.component';
import { MainMenuPageComponent } from './main-menu-page/main-menu-page.component';
import { GameOptionsPageComponent } from './game-options/game-options.component';




const routes: Routes = [
  {
    path: 'game-page', 
    title: 'Bowling-Game Game - Page',
    component: GamePageComponent
  },
  {
    path: 'main-menu-page', 
    title: 'Bowling-Game Menu - Page',
    component: MainMenuPageComponent
  },
  { 
    path: 'leaderboard-page', 
    title: 'Bowling Game Leaderboard - Page',
    component: LeaderboardPageComponent
  },
  { 
    path: '',   
    redirectTo: '/main-menu-page', 
    pathMatch: 'full' 
  },
  {
    path: '**', 
    title: 'Bowling-Game Menu - Page',
    component: NotFoundPageComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
