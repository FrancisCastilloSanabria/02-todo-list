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
      title: 'Terminar el Figma',
      completed: true,
    },
    {
      title: 'Finalizar app con Flutter',
      completed: false,
    },
    {
      title: 'Terminar el aplicativo web jee-boostrap',
      completed: true,
    },
    {
      title: 'Que abuso',
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
      completed: task.completed,
    };
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

  // Agrega una propiedad para el texto de búsqueda
  searchText = '';

  // Crea una función para filtrar las tareas basadas en el texto de búsqueda
  filterTasks(): any[] {
    return this.tasks.filter((task) =>
      task.title.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }
}
