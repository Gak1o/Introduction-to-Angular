import { Component, inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-todos',
  imports: [],
  templateUrl: './todos.html',
  styleUrl: './todos.scss',
})
export class Todos  implements OnInit {
todoService = inject(TodosService);


ngOnInit(): void {
  
  console.log(this.todoService.todoItems);
}
}
