import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from '../components/signin/signin.component';
import { SignupComponent } from '../components/signup/signup.component';
import { PortfolioComponent } from '../components/portfolio/portfolio.component';

const routes: Routes = [

  {path: "/", redirectTo: "portfolio", pathMatch: "full" },
  {path: "portfolio", component: PortfolioComponent},

  {path: "signin", component: SigninComponent},
  {path: "signup", component: SignupComponent}

];

@NgModule({
  declarations: [],
  imports: [ CommonModule, RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
