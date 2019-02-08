import * as React from 'react';
import './TodoListItems.scss';

export class TodoListItems extends React.Component{


    render () {

        const { label, onToggleImportant, onToggleDone, done, important} = this.props;
        let classNames = 'Todo-list-wrapper';
        if (done) {
            classNames += ' done';
        }

        if(important) {
            classNames += ' important';
        }
        return (
            <div className={classNames}>
                <div className='Todo-list-name'
                     onClick={onToggleDone}>
                    {label}
                </div>

                <div className='Todo-list-button'>
                    <button className='Todo-list-button__btn Todo-list-button__danger ' onClick={this.props.onDeleted}>
                        <i className="fas fa-trash-alt">

                        </i>
                    </button>
                    <button className='Todo-list-button__btn Todo-list-button__success' onClick={onToggleImportant}>
                        <i className="fas fa-exclamation">

                        </i>
                    </button>
                </div>
            </div>
        );
    };
}