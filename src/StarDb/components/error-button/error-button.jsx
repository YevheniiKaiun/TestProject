import * as React from 'react';
import './error-button.scss';

export class ErrorButton extends React.Component{
    constructor(){
        super();
        this.state ={
            renderError:false
        }
    }

    render() {
        if (this.state.renderError) {
            this.foo.bar = 0;
        }

        return (
            <button
                className='error-button btn'
                onClick={()=> this.setState({renderError: true})}>
                Throw Error
            </button>
        )
    }
}