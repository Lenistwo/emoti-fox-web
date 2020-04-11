import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {RoutingModule} from './modules/routing/routing.module';
import {HttpClientModule} from '@angular/common/http';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainComponent } from './components/main/main.component';
import { DetailsComponent } from './components/details/details.component';
import { EditActorComponent } from './components/edit-actor/edit-actor.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    FooterComponent,
    MainComponent,
    DetailsComponent,
    EditActorComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
