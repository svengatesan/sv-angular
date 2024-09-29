import { Routes } from '@angular/router';
import { BookComponent } from './component/book/book.component';
import { SidebarComponent } from './component/sidebar/sidebar.component';
import { MainComponent } from './component/main/main.component';

export const routes: Routes = [
    { path: 'book', component: BookComponent }, // Define a route for the BookComponent
    { path: 'side', component: SidebarComponent }, // Define a route for the BookComponent
    { path: 'main', component: MainComponent }, // Define a route for the BookComponent
    { path: '', redirectTo: '/book', pathMatch: 'full' } // Redirect to the book route by default
];
