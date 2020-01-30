import React from 'react';
import {Todo} from './Todo';

export class TodoList extends React.Component {

    render() {
        const newList = this.props.todoList.map( (todo,i) => {
            return(
                <Todo 
                    key = {'todo_' + i}
                    text = {todo.text}
                    priority = {todo.priority}
                    dueDate = {todo.dueDate}
                />
            );
        });
        return (
            <ul>
                {newList}
            </ul>
        );
    }

};