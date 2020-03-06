import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
// Now we have to store the value captured from the input. We can create an empty array in app.component.ts inside the AppComponent class:
export class AppComponent { todoArray=[] 
  addTodo(value: any){    
    this.todoArray.push(value) 
       console.log(this.todos) 
       }
       deleteItem(todo: any){  
          for(let i=0 ;i<= this.todoArray.length ;i++)
          {    
            if(todo== this.todoArray[i])
            {     
              this.todoArray.splice(i,1)    
            }   
          }  
        }
  todos(todos: any) {
    throw new Error("Method not implemented.");
  }
     }
