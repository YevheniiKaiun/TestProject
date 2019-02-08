import * as React from 'react';
import './TodoTitle.scss';

export class TodoTitle extends React.Component {
    constructor () {
        super();
    }
    render () {
        const {toDo, done } =this.props;
      return (
          <div className='Todo-header'>
              <h1 className='Todo-title'>My Todo App</h1>
              <h2 className='Todo-status'>{toDo} more to do, {done} done</h2>
          </div>
      )
    };
}