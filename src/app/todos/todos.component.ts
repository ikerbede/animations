import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-todos',
  templateUrl: 'todos.component.html',
  styleUrls: ['todos.component.css'],
  animations: [
    trigger('flyInOut', [
      state('in', style({ opacity: 0, transform: 'translateX(0)' })),
      transition(':enter', [
        style({ opacity: 1, transform: 'translateX(-100%)' }),
        animate(500),
      ]),
      transition(':leave', [
        animate(500, style({ opacity: 0, transform: 'translateX(100%)' })),
      ]),
    ]),
  ],
})
export class TodosComponent {
  todos = ['achieve resume', 'get new job', 'perform bodyboard'];
  newTodo = '';

  removeItem(item: string): void {
    this.todos = this.todos.filter((todo: string) => todo !== item);
  }

  addItem(): void {
    if (this.newTodo.trim()) {
      this.todos.push(this.newTodo.trim());
    }
    this.newTodo = '';
  }
}
