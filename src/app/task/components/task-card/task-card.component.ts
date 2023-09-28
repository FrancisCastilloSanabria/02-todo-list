import { Component, OnInit } from '@angular/core';
import { Task } from '../interfaces/task.interfaces';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-task-card',
  templateUrl: './task-card.component.html',
  styleUrls: ['./task-card.component.css']
})
export class TaskCardComponent implements OnInit {

  taskList: Task[] = [];
  currentTime: string = ''; // Agrega esta propiedad para almacenar la hora actual
  currentDate: string = '';

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.updateTaskList(); // Llama a esta función para inicializar la lista de tareas.
    this.updateCurrentTime(); // Llama a esta función para inicializar la hora.
    this.updateCurrentDate(); // Llama a esta función para inicializar la fecha.
    setInterval(() => {
      this.updateCurrentTime(); // Actualiza la hora cada segundo.
      this.updateCurrentDate(); // Actualiza la fecha cada segundo.
    }, 1000);
  }

  addTask(event: Task) {
    console.log('New task:', event);
    this.taskService.add(event);
    this.updateTaskList(); // Actualiza la lista de tareas después de agregar una nueva tarea.
  }

  updateTask(event: { task: Task; changes: Task }): void {
    console.log('Edit task:', event);
    this.taskService.update(event.task, event.changes);
    this.updateTaskList(); // Actualiza la lista de tareas después de editar una tarea.
  }

  deleteTask(event: Task) {
    console.log('Remove task:', event);
    this.taskService.delete(event);
    this.updateTaskList(); // Actualiza la lista de tareas después de eliminar una tarea.
  }

  private updateTaskList() {
    this.taskList = this.taskService.findAll();
  }

  private updateCurrentTime() {
    const currentDate = new Date();
    const hours = currentDate.getHours().toString().padStart(2, '0');
    const minutes = currentDate.getMinutes().toString().padStart(2, '0');
    const seconds = currentDate.getSeconds().toString().padStart(2, '0');
    this.currentTime = `${hours}:${minutes}:${seconds}`;
  }

  private updateCurrentDate() {
    const currentDate = new Date();
    const days = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
    const day = days[currentDate.getDay()];
    const date = currentDate.getDate().toString().padStart(2, '0');
    const months = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];
    const month = months[currentDate.getMonth()];
    const year = currentDate.getFullYear().toString();
    this.currentDate = `${day} ${date} de ${month} de ${year}`;
  }
  
}
