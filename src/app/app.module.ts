import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { FormsModule } from '@angular/forms';
import { TaskHeaderComponent } from './task/components/task-header/task-header.component';
import { TaskInputComponent } from './task/components/task-input/task-input.component';
import { TaskListComponent } from './task/components/task-list/task-list.component';
import { TaskCardComponent } from './task/components/task-card/task-card.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    TaskHeaderComponent,
    TaskInputComponent,
    TaskListComponent,
    TaskCardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
