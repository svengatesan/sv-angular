import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-book',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './book.component.html',
  styleUrl: './book.component.scss'
})
export class BookComponent {

  title = 'Welcome to Angular!';
  description = 'This is a simple Angular component example.';
  showDescription = false;

  toggleDescription() {
    this.showDescription = !this.showDescription;
  }
}
