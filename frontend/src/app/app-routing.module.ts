import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { OrganListComponent } from './organ-list/organ-list.component';
import { UserRegComponent } from './user-reg/user-reg.component';


const routes: Routes = [
  {path:'', component:HomePageComponent},
  {path:'usrReg', component:UserRegComponent},
  {path: 'organList', component:OrganListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }