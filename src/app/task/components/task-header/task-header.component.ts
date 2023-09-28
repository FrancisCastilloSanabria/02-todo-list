import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-task-header',
  templateUrl: './task-header.component.html',
  styleUrls: ['./task-header.component.css']
})
export class TaskHeaderComponent {
@Input() public title: string = '';

public date: string;

  constructor() {
    const currentDate = new Date();
    const day = currentDate.getDate().toString().padStart(2, '0');
    const month = (currentDate.getMonth() + 1).toString().padStart(2, '0'); // Agregamos 1 porque los meses van de 0 a 11
    const year = currentDate.getFullYear().toString();
    this.date = `${day}/${month}/${year}`;
  }

  // public selectedCourse: string = '';

}
