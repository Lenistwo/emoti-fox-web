import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {MainComponent} from '../../components/main/main.component';
import {DetailsComponent} from '../../components/details/details.component';

export const routes: Routes = [
  {
    path: 'main',
    component: MainComponent
  },
  {
    path: 'details/:id',
    component: DetailsComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class RoutingModule { }
