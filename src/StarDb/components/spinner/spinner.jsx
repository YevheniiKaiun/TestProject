import * as React from 'react';
import './spinner.scss';
export class Spinner extends React.Component{
    render() {
        return (
            <div className="lds-css">
                <div className="lds-double-ring">
                    <div></div>
                    <div></div>
                </div>
            </div>
        )
    };
}