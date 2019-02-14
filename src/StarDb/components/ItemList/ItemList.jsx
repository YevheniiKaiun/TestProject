import * as React from 'react';
import './ItemList.scss';
import {SwapiService} from "../../services/swapi-service.jsx";
import {Spinner} from "../spinner/spinner.jsx";

export class ItemList extends React.Component{
    constructor() {
        super();
        this.state = {
            itemList: null
        };


    }

    componentDidMount() {

        const { getData } = this.props;

        getData()
            .then((itemList) => {
                this.setState({
                    itemList
                })
            })
    }

    renderItems(arr) {
        return arr.map((item) => {

            const { id } = item;
            const label = this.props.renderItem(item);
            return (
                <li className="characters-list__group"
                    key={id}
                    onClick={() => this.props.onItemSelected(id)}>
                    {label}
                </li>
            )
        })
    }

    render() {

        const {itemList} = this.state;

        if (!itemList) {
            return <Spinner/>;
        }

        const items = this.renderItems(itemList);

        return (
            <ul className="characters-list">
                {items}
            </ul>
        );
    }
}