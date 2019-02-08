import * as React from 'react';
import './TodoItemStatusFilter.scss';



export class TodoItemStatusFilter extends React.Component{
    constructor() {
        super();
        this.buttons = [
            { name: 'all', label: 'All'},
            { name: 'active', label: 'Active'},
            { name: 'done', label: 'Done'},
        ];
    }



    render () {

        const { filter, onFilterChange} = this.props;

        const buttons = this.buttons.map(({name, label}) => {
            const isActive = filter === name;
            const clazz = isActive ? 'status-button__btn-active': 'status-button__btn' ;
            return (
                <button className={`status-button__btn ${clazz}`}                                     key={name}
                    onClick={() => onFilterChange(name)}>
                    {label}
                </button>
            )
        });

        return <div className='status-button'>
            {buttons}
        </div>
    }
}