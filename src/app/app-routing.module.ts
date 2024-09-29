import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BookComponent } from './component/book/book.component';
import { SidebarComponent } from './component/sidebar/sidebar.component';
import { MainComponent } from './component/main/main.component';

const routes: Routes = [
  { path: 'book', component: BookComponent }, // Define a route for the BookComponent
  { path: 'side', component: SidebarComponent},
  { path: 'main', component: MainComponent},
  { path: '', redirectTo: '/book', pathMatch: 'full' } // Redirect to the book route by default
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
