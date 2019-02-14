import * as React from 'react';
import './people-page.scss';
import {ItemList} from "../ItemList/ItemList.jsx";
import {PersonDetails} from "../PersonDetails/PersonDetails.jsx";
import {ErrorIndicator} from "../error-indicator/error-indicator.jsx";
import {SwapiService} from "../../services/swapi-service.jsx";

export class PeoplePage extends React.Component{
    constructor() {
        super();
        this.state = {
            selectedPerson:null,
            hasError:false
        };
        this.swapiService = new SwapiService();
    }

    componentDidCatch() {
        console.log('componentDidCatch()');
        this.setState({hasError:true})
    }

    onPersonSelected(id) {
        this.setState({
            selectedPerson: id
        });
    }

    render() {

        if(this.state.hasError) {
            return <ErrorIndicator/>
        }

        const itemList = (
            <ItemList onItemSelected={this.onPersonSelected.bind(this)}
                      getData={this.swapiService.getAllPeople}
                      renderItem={({name, gender, birthYear}) => `${name}  (${gender}, ${birthYear})`}/>
        );

        const personDetails = (
            <PersonDetails personId={this.state.selectedPerson}/>
        );

        return (
            <Row left={itemList} right={personDetails}/>
        )

    }
}

const Row = ({left, right}) => {
    return (
        <div className='person-content'>
            <div className='characters'>
                {left}
            </div>
            <div className='person-card'>
                {right}
            </div>
        </div>
    )
};