import * as React from 'react';
import './Header.scss';

export class Header extends React.Component{
    render() {
        return (
            <div className="header">
                <h3 className='header__title'>
                    <a href="#">
                        Star DB
                    </a>
                </h3>
                <ul className="header__components">
                    <li className='header__list'>
                        <a href="#">People</a>
                    </li>
                    <li className='header__list'>
                        <a href="#">Planets</a>
                    </li>
                    <li className='header__list'>
                        <a href="#">Starships</a>
                    </li>
                </ul>
            </div>
        );
    }
}