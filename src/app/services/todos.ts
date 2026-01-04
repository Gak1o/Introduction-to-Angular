import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Todos {
  todoItems: Array<Todo> = [{
title: 'groceries',
id: 0,
userId: 1,
completed: false,

  },
{
  title: 'Carwash',
  id: 1,
  userId: 2,
  completed: false,
  
}]
  constructor() {}
}
