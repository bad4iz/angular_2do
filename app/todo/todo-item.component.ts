/**
 * Created by bad4iz on 18.10.2016.
 */
import { Component, Input } from '@angular/core';
import { Todo } from './todo'

@Component({
    selector: 'todo-item',
    templateUrl: './app/todo/todo-item.component.html',
    styleUrls: ['./app/todo/todo-item.component.css']
})

export class TodoItem{
    @Input() todo: Todo;

    toggleDone() {
        this.todo.done = !this.todo.done;
    }
    delete(){

    }
    my_mouseenter(){
        this.todo.my_mouseenter = !this.todo.my_mouseenter;
        console.log(' наввели мышку')
    }
}