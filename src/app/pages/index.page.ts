import { Component, inject } from '@angular/core';
import { SearchService } from './search.service';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ReactiveFormsModule],
  template: `
    <h2>AlgoriaSearch</h2>

    <br />
    <input [formControl]="formControl" />
    <br />
    <br />
    <button (click)="search()">Search</button>
  `,
})
export default class HomeComponent {
  readonly searchService = inject(SearchService);
  readonly formControl = new FormControl('');

  search() {
    const query = this.formControl.value;
    if (!query) return;
    console.log('Searching for:', query);
    this.searchService.search(query);
  }
}
