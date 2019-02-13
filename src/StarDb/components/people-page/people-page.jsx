import * as React from 'react';
import './people-page.scss';
import {ItemList} from "../ItemList/ItemList.jsx";
import {PersonDetails} from "../PersonDetails/PersonDetails.jsx";
import {ErrorIndicator} from "../error-indicator/error-indicator.jsx";

export class PeoplePage extends React.Component{
    constructor() {
        super();
        this.state = {
            selectedPerson:1,
            hasError:false
        }
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

        return (
            <div className='person-content'>
                <div className='characters'>
                    <ItemList onItemSelected={this.onPersonSelected.bind(this)}/>
                </div>
                <div className='person-card'>
                    <PersonDetails personId={this.state.selectedPerson}/>
                </div>
            </div>
        )
    }
}