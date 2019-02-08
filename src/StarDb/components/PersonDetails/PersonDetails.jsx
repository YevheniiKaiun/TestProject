import * as React from 'react';
import './PersonDetails.scss';

export class PersonDetails extends React.Component{
    render() {
        return (
            <div className='person-card-wrapper'>
                <img className="person-image"
                     src="https://starwars-visualguide.com/assets/img/characters/3.jpg" />

                <div className="card-body">
                    <h4>R2-D2</h4>
                    <ul className="person-specifications">
                        <li className='person-specifications__list'>
                            <div className="term">Gender:</div>
                            <div>male</div>
                        </li>
                        <li className="person-specifications__list">
                            <div className="term">Birth Year:</div>
                            <div>43</div>
                        </li>
                        <li className="person-specifications__list">
                            <div className="term">Eye Color:</div>
                            <div>red</div>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}