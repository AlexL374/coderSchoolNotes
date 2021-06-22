import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { FinishedPageComponent } from './finished-page/finished-page.component';

const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'finished', component: FinishedPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
