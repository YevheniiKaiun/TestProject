import React, { Component } from 'react';
import './TodoApp.scss';
import { TodoTitle} from "../TodoTitle/TodoTitle.jsx";
import { SearchPanel } from "../SearchPanel/SearchPanel.jsx";
import { TodoItemStatusFilter} from "../TodoItemStatusFilter/TodoItemStatusFilter.jsx";
import { TodoList } from "../TodoList/TodoList.jsx";
import { TodoItemAddForm} from "../TodoItemAddForm/TodoItemAddForm.jsx";


export class TodoApp extends Component {
    constructor() {
        super();
        this.maxId = 100;
        this.state = {
            todoData:[
                this.createTodoItem('Learn HTML'),
                this.createTodoItem('Learn CSS'),
                this.createTodoItem('Learn JS'),
                this.createTodoItem('Learn React'),
                this.createTodoItem('Build Awesome App'),
                this.createTodoItem('Find New Job'),
                this.createTodoItem('Quit Old Work'),
                this.createTodoItem('Become The Best Developer'),
            ],
            term: '',
            filter: 'all'
        };

        this.deleteItem = (id) => {
            this.setState(({ todoData}) => {
                const idx = todoData.findIndex((el) => el.id === id);

                const newArray = [
                    ...todoData.slice(0, idx),
                    ...todoData.slice(idx + 1)
                ];

                return {
                    todoData: newArray
                };

            });
        };
        this.addItem = (text) => {
            const newItem = this.createTodoItem(text);
            this.setState(({todoData}) => {

                const newArr = [
                    ...todoData,
                    newItem
                ];

                return {
                    todoData: newArr
                };
            });
        };
        // this.toggleProperty = (arr, id, propName) => {
        //         const idx = arr.findIndex((el) => el.id === id);
        //
        //         const oldItem = arr[idx];
        //         const newItem = {...oldItem, [propName]: !oldItem[propName]};
        //
        //
        //         return {
        //             ...arr.slice(0, idx),
        //             newItem,
        //             ...arr.slice(idx + 1)
        //         }
        //
        // };
        this.onToggleImportant = (id) => {
            this.setState(({ todoData }) => {
                const idx = todoData.findIndex((el) => el.id === id);

                const oldItem = todoData[idx];
                const newItem = {...oldItem, important: !oldItem.important};

                const newArray = [
                    ...todoData.slice(0, idx),
                    newItem,
                    ...todoData.slice(idx + 1)
                ];

                return {
                    todoData: newArray
                }
                // return {
                //     todoData:this.toggleProperty(todoData , id, 'done')
                // }
            });
        };
        this.onToggleDone = (id) => {
            this.setState(({ todoData }) => {
                const idx = todoData.findIndex((el) => el.id === id);

                const oldItem = todoData[idx];
                const newItem = {...oldItem, done: !oldItem.done};

                const newArray = [
                    ...todoData.slice(0, idx),
                    newItem,
                    ...todoData.slice(idx + 1)
                ];

                return {
                    todoData: newArray
                }
                // return {
                //     todoData:this.toggleProperty(todoData , id, 'important')
                // }
            });
        };

        this.search = (items, term) => {
             return items.filter((item) => {
                return item.label.
                toLowerCase()
                    .indexOf(term.toLowerCase()) > -1;
            });
        };
        this.onSearchChange = (term) => {
          this.setState({term});
        };
        this.onFilterChange = (filter) => {
            this.setState({filter});
        };

        this.filter =(items, filter) => {
          switch (filter) {
              case 'all':
                  return items;
              case  'active':
                  return items.filter((item) => !item.done);
              case 'done':
                  return items.filter((item) => item.done);
              default:
                  return items;
          }
        }
    };

    createTodoItem (label){
        return {
            label,
            important: false,
            done: false,
            id: this.maxId++
        };
    };


    render () {

        const {todoData, term, filter } = this.state;
        const visibleItems = this.filter(
            this.search(todoData, term), filter);
        const doneCount = todoData.filter((el) => el.done).length;
        const todoCount = todoData.length - doneCount;

        return <div className='Todo-wrapper'>
            <TodoTitle toDo={todoCount} done={doneCount}/>
            <div className='Todo-panel'>
                <SearchPanel
                    onSearchChange={this.onSearchChange}
                />
                <TodoItemStatusFilter
                    filter={filter}
                    onFilterChange={this.onFilterChange}
                />
            </div>
            <TodoList
                todos={visibleItems}
                onDeleted={this.deleteItem}
                onToggleImportant={this.onToggleImportant}
                onToggleDone={this.onToggleDone}
            />
            <TodoItemAddForm onItemAdded={this.addItem}/>
        </div>
    }

}