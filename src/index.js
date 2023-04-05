import _ from 'lodash';
import './style.css';

const TASKS = [
    {
        description: 'Task one',
        complete: true,
        index: 0,
    },
    {
        description: 'Task two',
        complete: true,
        index: 1,
    },
    {
        description: 'Task three',
        complete: true,
        index: 2,
    },
    {
        description: 'Task four',
        complete: true,
        index: 3,
    },
];

const todoList = document.querySelector('.todo-list');
const title = document.createElement('p');
const input = document.createElement('input');
const divone = document.createElement('div');
const divtwo = document.createElement('div');
const clear = document.createElement('a');
const submit = document.createElement('img');
const 

title.innerText = "Today's To do";
title.classList.add('title-text');
input.type = 'text';
input.placeholder = 'Add your list...';
input.classList.add('task-input');
divone.classList.add('task-input-box');
clear.innerText = 'Clear all completed';
submit.classList.add('add-todo-btn');
divtwo.classList.add('clear-btn-box')
divone.appendChild(input);
divone.appendChild(submit);
todoList.appendChild(title);
todoList.appendChild(divone);
divtwo.appendChild(clear);

const showTodo = () => {
    for (let i = 0; i < TASKS.length; i++) {
        const label = document.createElement('label');
        const checkbox = document.createElement('input');
        const li = document.createElement('li');
        li.classList.add('list-item');
        checkbox.type = 'checkbox';
        checkbox.id = TASKS[i].index;
        label.for = TASKS[i].index;

        label.innerText = TASKS[i].description;
        li.appendChild(checkbox);
        li.appendChild(label);
        todoList.appendChild(li);
    }
    todoList.appendChild(divtwo);
};

window.addEventListener('load', () => {
    showTodo();
});
