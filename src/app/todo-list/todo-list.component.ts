import { Component } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent {
  editableId: number | null = null;
  newTask = '';

  tasks: any[] = [
    {
      title: 'Crear la lista de tareas',
      completed: true,
    },
    {
      title: 'Realizar la estructura HTML',
      completed: true,
    },
    {
      title: 'Agregar estilos y validaciones',
      completed: false,
    },
    {
      title: 'Elaborar el flujo y animaciones',
      completed: false,
    },
    {
      title: 'Desplegar el proyecto en la web',
      completed: false,
    },
  ];

  addTask() {
    const newTask = {
      title: this.newTask,
      completed: false,
    };
    this.tasks.push(newTask);
  }

  updateTask(task: any, title: string) {
    const index = this.tasks.indexOf(task);
    const updateTask = {
      title,
      completed: task.completed
    }
    this.tasks[index] = { ...task, ...updateTask };
  }

  deleteTask(task: any) {
    const index = this.tasks.indexOf(task);
    this.tasks.splice(index, 1);
  }

  changeModel() {
    console.log(this.tasks);
  }

  startEdit(id: number): void {
    this.editableId = id;
  }

  stopEdit(task: any, title: string): void {
    this.editableId = null;
    this.updateTask(task, title);
  }
}