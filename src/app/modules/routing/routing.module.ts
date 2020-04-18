import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {MainComponent} from '../../components/main/main.component';
import {DetailsComponent} from '../../components/details/details.component';
import {CreateActorComponent} from '../../components/create-actor/create-actor.component';
import {EditActorComponent} from '../../components/edit-actor/edit-actor.component';

export const routes: Routes = [
  {
    path: 'main',
    component: MainComponent
  },
  {
    path: 'details/:id',
    component: DetailsComponent
  },
  {
    path: 'create',
    component: CreateActorComponent
  },
  {
    path: 'edit/:id',
    component: EditActorComponent
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
export class RoutingModule {
}
