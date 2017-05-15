import { Component } from '@angular/core';
import { TodoStore, Todo } from './services/store';

@Component({
	selector: 'todo-app',
	templateUrl: './app.component.html'
})
export class AppComponent {
	newTodoText = '';

	constructor(public todoStore: TodoStore) {
	}

  todobyId(index: number, todo: Todo) {
		return todo.id;
	}

	removeCompleted() {
		this.todoStore.removeCompleted();
	}

	addTodo() {
		if (this.newTodoText.trim().length) {
			this.todoStore.add(this.newTodoText);
			this.newTodoText = '';
		}
	}
}
