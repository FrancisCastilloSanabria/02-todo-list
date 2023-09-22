import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../interfaces/task.interfaces';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {

  @Output()
  removeTask: EventEmitter<Task> = new EventEmitter<Task>();

  @Output()
  editTask: EventEmitter<{task: Task, changes: Task}> = new EventEmitter<{task: Task, changes: Task}>();

  @Input()
  tasks: Task[] = [];

  editableId: number | null = null;

  removeItem(task: Task) {
    this.removeTask.emit(task);
  }

  startEdit(id: number): void {
    this.editableId = id;
  }

  stopEdit(task: Task, title: string): void {
    this.editableId = null;
    const changes: Task = { title, completed: task.completed };
    this.editTask.emit({ task, changes });
  }

}
