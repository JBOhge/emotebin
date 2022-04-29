import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { EmoteComponent } from './components/emote/emote.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { InfopageComponent } from './components/infopage/infopage.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
  },
  {
    path: 'emote',
    component: EmoteComponent,
  },
  {
    path:'info',
    component: InfopageComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
