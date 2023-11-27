import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ConnexionComponent } from './components/connexion/connexion.component';
import { ProgramComponent } from './components/program/program.component';
import { RecipeComponent } from './components/recipe/recipe.component';
import { AdviceComponent } from './components/advice/advice.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SearchComponent } from './components/search/search.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoachComponent } from './components/coach/coach.component';
import { FreeProgramComponent } from './components/free-program/free-program.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ConnexionComponent,
    ProgramComponent,
    RecipeComponent,
    AdviceComponent,
    HeaderComponent,
    FooterComponent,
    SearchComponent,
    CoachComponent,
    FreeProgramComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
    
  ],
  bootstrap: [AppComponent],
  exports:[
    ReactiveFormsModule
   
    
  ]
})
export class AppModule { }
