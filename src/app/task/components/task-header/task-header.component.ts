import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-task-header',
  templateUrl: './task-header.component.html',
  styleUrls: ['./task-header.component.css']
})
export class TaskHeaderComponent {
@Input() public title: string = '';
@Input() public date: string = '';
@Input() public course: string = '';

}
