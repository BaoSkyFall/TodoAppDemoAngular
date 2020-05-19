import { Component, OnInit, Input } from '@angular/core';
import { taskList } from '../../models/tasklist-model'
import { FormsModule } from '@angular/forms';
import { TaskDetail } from 'src/app/models/taskdetail-model';
@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  @Input() tasks: taskList;
  constructor() { }
  public descriptionTask: string;

  ngOnInit(): void {
  }
  onClickAdd(): void {
    console.log("description: ", this.descriptionTask)
    let tasks = [];
    tasks= this.tasks.tasks;
    let obj: TaskDetail = { description: this.descriptionTask, complete: false }
    this.tasks.tasks.push(obj);

  }

}
