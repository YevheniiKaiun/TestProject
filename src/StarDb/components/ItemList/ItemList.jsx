import * as React from 'react';
import './ItemList.scss';

export class ItemList extends React.Component{
    render() {
        return (
            <ul className="characters-list">
                <li className="characters-list__group">
                    Luke Skywalker
                </li>
                <li className="characters-list__group">
                    Darth Vader
                </li>
                <li className="characters-list__group">
                    R2-D2
                </li>
                <li className="characters-list__group">
                    Owen Lars
                </li>
                <li className="characters-list__group">
                    Leia Organa
                </li>
                <li className="characters-list__group">
                    C-3PO
                </li>
            </ul>
        );
    }
}