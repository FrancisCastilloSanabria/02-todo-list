import { Injectable } from '@angular/core';
import { Task } from '../interfaces/task.interfaces';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tasks: Task[] = [
    {
      title: 'Crear la lista de tareas',
      completed: true,
    },
    {
      title: 'Realizar la estructura HTML',
      completed: false,
    },
  ];

  constructor() {}

  findAll(): Task[] {
    return this.tasks;
  }

  add(task: Task): void {
    this.tasks.push(task);
  }

  update(task: Task, change: Task) {
    const index = this.tasks.indexOf(task);
    this.tasks[index] = { ...task, ...change };
  }

  delete(task: any): void {
    const index = this.tasks.indexOf(task);
    this.tasks.splice(index, 1);
  }
}
