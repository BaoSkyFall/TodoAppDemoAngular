import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { TodoAppComponent } from './todo-app/todo-app.component';
import { TaskListComponent } from './todo-app/task-list/task-list.component';
import { TaskDetailComponent } from './todo-app/task-detail/task-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoAppComponent,
    TaskListComponent,
    TaskDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
