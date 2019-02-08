import * as React from 'react';
import './TodoList.scss';
import {TodoListItems} from "../TodoListItems/TodoListItems.jsx";



export class TodoList extends React.Component {

    render(){

        const { todos, onDeleted, onToggleImportant, onToggleDone} = this.props;


        const elements = todos.map((item) => {
           const {id, ...itemProps} = item;
           return (
               <li className='Todo-list-item' key={id}>
                   <TodoListItems
                       {...itemProps}
                       onDeleted={() => onDeleted(id)}
                       onToggleImportant={() => onToggleImportant(id)}
                       onToggleDone={() => onToggleDone(id)}
                   />
               </li>
           );
        });

        return(<ul className='Todo-list'>
            { elements }
        </ul>);
    } ;

}









