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

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.taskList = this.taskService.findAll();
  }

  addTask(event: Task) {
    console.log('New task:', event);
    this.taskService.add(event);
  }

  updateTask(event: { task: Task; changes: Task }): void {
    console.log('Edit task:', event);
    this.taskService.update(event.task, event.changes);
  }

  deleteTask(event: Task) {
    console.log('Remove task:', event);
    this.taskService.delete(event);
  }
}
