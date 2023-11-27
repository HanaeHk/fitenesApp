import {NgModule } from '@angular/core';
import {RouterModule, Routes } from '@angular/router';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ConnexionComponent } from './components/connexion/connexion.component';
import { ProgramComponent } from './components/program/program.component';
import { HomeComponent } from './components/home/home.component';
import { RecipeComponent } from './components/recipe/recipe.component';
import { AdviceComponent } from './components/advice/advice.component';
import { CoachComponent } from './components/coach/coach.component';

const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'connexion', component:ConnexionComponent},
  {path:'program',component:ProgramComponent},
  {path:'recipe', component:RecipeComponent},
  {path:'advice', component:AdviceComponent},
  {path:'coach',component:CoachComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    MatFormFieldModule, 
    MatInputModule,
    MatSelectModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
