import { Component } from '@angular/core';
import { TaskInterface } from 'src/app/interfaces/task.interface';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent {
  public tasks: TaskInterface[] = [];
  public taskName: string = '';

  public addTask(): void {
    this.tasks.push({
      id: this.tasks.length + 1,
      title: this.taskName,
      done: false,
    });
    this.taskName = '';
  }

  public clearTasks(): void {
    this.tasks = [];
  }
}
