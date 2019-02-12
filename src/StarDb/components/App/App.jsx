import * as React from 'react';
import './App.scss';
import { Header } from "../Header/Header.jsx";
import { ItemList } from "../ItemList/ItemList.jsx";
import { PersonDetails } from "../PersonDetails/PersonDetails.jsx";
import { PlanetDetails } from "../PlanetDetails/PlanetDetails.jsx";
import { RandomPlanet } from "../RandomPlanet/RandomPlanet.jsx";
import { StarshipDetails } from "../StarshipDetails/StarshipDetails.jsx";

export class App extends React.Component{
    constructor() {
        super();
        this.state = {
            showRandomPlanet: true,
            selectedPerson: 1
        };
    }

    toggleRandomPlanet() {
        this.setState((state) => {
            return {
                showRandomPlanet: !state.showRandomPlanet
            }
        });
    };

    onPersonSelected(id) {
        this.setState({
            selectedPerson: id
        });
    }

    render() {

        const planet = this.state.showRandomPlanet ? <RandomPlanet/> : null;

        return (
            <div className='Stardb-wrapper'>
                <Header />
                { planet }

                <button
                    className='toggle-planet btn'
                    onClick={this.toggleRandomPlanet.bind(this)}>
                    Toggle Random Planet
                </button>

                <div className='person-content'>
                    <div className='characters'>
                        <ItemList onItemSelected={this.onPersonSelected.bind(this)}/>
                    </div>
                    <div className='person-card'>
                        <PersonDetails personId={this.state.selectedPerson}/>
                    </div>
                </div>
            </div>
        )
    }
}