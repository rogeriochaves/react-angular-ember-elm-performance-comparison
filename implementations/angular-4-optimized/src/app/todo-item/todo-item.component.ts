import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { TodoStore, Todo } from '../services/store';

@Component({
  selector: 'todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoItemComponent implements OnInit {

  @Input() todo: Todo;

  constructor(private todoStore: TodoStore) { }

  ngOnInit() {
  }

  toggleCompletion() {
    this.todoStore.toggleCompletion(this.todo);
  }

  editTodo() {
    this.todo.editing = true;
  }

  remove() {
    this.todoStore.remove(this.todo);
  }

  stopEditing(editedTitle: string) {
    this.todo.title = editedTitle;
    this.todo.editing = false;
  }

  cancelEditingTodo() {
    this.todo.editing = false;
  }

  updateEditingTodo(editedTitle: string) {
    editedTitle = editedTitle.trim();
    this.todo.editing = false;

    if (editedTitle.length === 0) {
      return this.todoStore.remove(this.todo);
    }

    this.todo.title = editedTitle;
  }

}
