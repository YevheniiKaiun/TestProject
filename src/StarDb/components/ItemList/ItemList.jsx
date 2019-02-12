import * as React from 'react';
import './ItemList.scss';
import {SwapiService} from "../../services/swapi-service.jsx";
import {Spinner} from "../spinner/spinner.jsx";

export class ItemList extends React.Component{
    constructor() {
        super();
        this.state = {
            peopleList: null
        };

        this.swapiService = new SwapiService();
    }

    componentDidMount() {
        this.swapiService
            .getAllPeople()
            .then((peopleList) => {
                this.setState({
                    peopleList
                })
            })
    }

    renderItems(arr) {
        return arr.map(({id, name}) => {
            return (
                <li className="characters-list__group"
                    key={id}
                    onClick={() => this.props.onItemSelected(id)}>
                    {name}
                </li>
            )
        })
    }

    render() {

        const {peopleList} = this.state;

        if (!peopleList) {
            return <Spinner/>;
        }

        const items = this.renderItems(peopleList);

        return (
            <ul className="characters-list">
                {items}
            </ul>
        );
    }
}