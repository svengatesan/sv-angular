import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BookComponent } from './component/book/book.component';
import { SidebarComponent } from './component/sidebar/sidebar.component';
import { MainComponent } from './component/main/main.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [BookComponent , SidebarComponent, MainComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'hello';
}
