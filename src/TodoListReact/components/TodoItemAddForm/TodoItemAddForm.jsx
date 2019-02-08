import * as React from 'react';
import './TodoItemAddForm.scss';

export class TodoItemAddForm extends React.Component{
    constructor() {
        super();
        this.state = {
            label: ''
        };

        this.onLabelChange = (e) => {
            this.setState({
                label: e.target.value
            });
        };

        this.onSubmit = (e) => {
            e.preventDefault();
            this.props.onItemAdded(this.state.label);
            this.setState({
                label: ''
            });
        }

    }



    render() {
        return (
            <form className='Todo-item-add-form'
                onSubmit={this.onSubmit}
            >

                <input
                    type='text'
                    className='Todo-item-add-form__control'
                    placeholder='What need to be done'
                    onChange={this.onLabelChange}
                    value={this.state.label}
                />
                <button className='Todo-item-add-form__btn'>
                    Add Item</button>
            </form>
        )
    }
}