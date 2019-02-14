import * as React from 'react';
import './error-indicator.scss';
import icon from '../../../../assets/deathstar.png';
export class ErrorIndicator  extends React.Component{

    render() {
        return (
            <div className="error-indicator">
                <img src={icon} alt="error icon"/>
                <div className="boom">BOOM!</div>
                <div>
                    something has gone terribly wrong
                </div>
                <div>
                    (but we already sent droids to fix it)
                </div>
            </div>
        );
    }
}


