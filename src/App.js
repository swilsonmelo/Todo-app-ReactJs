import React from 'react';
import { TodoList } from './TodoList'



export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  todos : [
        { text: "Learn React", priority: 5, dueDate: new Date() },
        { text: "Learn about APIs", priority: 4, dueDate: new Date(2020, 1, 23) },
        { text: "Write TODO App", priority: 3, dueDate: new Date(2020, 1, 30) }
      ]
    };
    this.handleClick = this.handleClick.bind(this);
  
  }

  handleClick(){
    const newTodo = {
      text : document.getElementById('text').value,
      priority : document.getElementById('priority').value,
      dueDate : new Date()
    }
    const newTodos = this.state.todos.slice();
    newTodos.push(newTodo);
    //console.log(newTodos);
    this.setState({todos : newTodos})
  }

  render() {
    return (
      <div style = {{marginLeft: '20px'}}>
        <TodoList todoList={this.state.todos} />
        <form>
          TODO : 
          <input 
            id = 'text' 
          />
          <br></br>
          PRIORITY : 
          <input 
            id = 'priority' 
          />                 
        </form>
        <button
          onClick = {this.handleClick}
        >
          submit
        </button>
      </div>
    );
  }
}