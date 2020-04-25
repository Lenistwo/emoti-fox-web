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
import { CreateActorComponent } from './components/create-actor/create-actor.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule, MatDialogModule, MatIconModule, MatTooltipModule} from '@angular/material';
import {MatSliderModule} from '@angular/material/slider';
import { LandingComponent } from './components/landing-component/landing.component';
import { ModalComponent } from './components/main/modal/modal.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    FooterComponent,
    MainComponent,
    DetailsComponent,
    EditActorComponent,
    CreateActorComponent,
    LandingComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatSliderModule,
    MatButtonModule,
    MatTooltipModule,
    MatIconModule,
    MatDialogModule
  ],
  entryComponents: [ModalComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
