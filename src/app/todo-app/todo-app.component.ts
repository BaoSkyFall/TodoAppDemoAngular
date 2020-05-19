import { Component, OnInit } from '@angular/core';
import { taskList } from '../models/tasklist-model'
import * as _ from 'lodash'
@Component({
  selector: 'app-todo-app',
  templateUrl: './todo-app.component.html',
  styleUrls: ['./todo-app.component.css']
})
export class TodoAppComponent implements OnInit {

  constructor() { }
  alphabetDESC: boolean = true;
  titleTaskList:string;
  taskLists: Array<taskList> = [{
    id: 1,
    title: 'ATask Title 01',
    tasks: [{
      description: 'Eu ipsum dolor aute excepteur aliquip sit velit dolore. ',
      complete: true
    }, {
      description: 'Eu ipsum dolor aute excepteur aliquip sit velit dolore. ',
      complete: true
    }, {
      description: 'Eu ipsum dolor aute excepteur aliquip sit velit dolore. ',
      complete: true
    }, {
      description: 'Eu ipsum dolor aute excepteur aliquip sit velit dolore. ',
      complete: true
    }]
  }, {
    id: 2,
    title: 'BTask Title 02',
    tasks: [{
      description: 'Eu ipsum dolor aute excepteur aliquip sit velit dolore. ',
      complete: true
    }, {
      description: 'Eu ipsum dolor aute excepteur aliquip sit velit dolore. ',
      complete: false
    }, {
      description: 'Eu ipsum dolor aute excepteur aliquip sit velit dolore. ',
      complete: false
    }, {
      description: 'Eu ipsum dolor aute excepteur aliquip sit velit dolore. ',
      complete: false
    }]
  }, {
    id: 3,
    title: 'CTask Title 03',
    tasks: [{
      description: 'Eu ipsum dolor aute excepteur aliquip sit velit dolore. ',
      complete: false
    }, {
      description: 'Eu ipsum dolor aute excepteur aliquip sit velit dolore. ',
      complete: false
    }, {
      description: 'Eu ipsum dolor aute excepteur aliquip sit velit dolore. ',
      complete: false
    }, {
      description: 'Eu ipsum dolor aute excepteur aliquip sit velit dolore. ',
      complete: false
    }]
  }, {
    id: 3,
    title: 'DTask Title 04',
    tasks: [{
      description: 'Eu ipsum dolor aute excepteur aliquip sit velit dolore. ',
      complete: false
    }, {
      description: 'Eu ipsum dolor aute excepteur aliquip sit velit dolore. ',
      complete: false
    }, {
      description: 'Eu ipsum dolor aute excepteur aliquip sit velit dolore. ',
      complete: false
    }, {
      description: 'Eu ipsum dolor aute excepteur aliquip sit velit dolore. ',
      complete: false
    }]
  }]
  ngOnInit(): void {
  }
  sortByName(){
    console.log('alphabetDESC:', !this.alphabetDESC)
    this.alphabetDESC = !this.alphabetDESC;
    if(this.alphabetDESC)
    this.taskLists =  _.orderBy(this.taskLists, ['title'], ['asc']);
    else
    this.taskLists =  _.orderBy(this.taskLists, ['title'], ['desc']);

  }
  onClickAddNewTaskList(){
    this.taskLists.push({id:5,title:this.titleTaskList,tasks:[]})
  }
}
