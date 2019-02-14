import * as React from 'react';
import './App.scss';
import { Header } from "../Header/Header.jsx";
import { ItemList } from "../ItemList/ItemList.jsx";
import { PersonDetails } from "../PersonDetails/PersonDetails.jsx";
import { PlanetDetails } from "../PlanetDetails/PlanetDetails.jsx";
import { RandomPlanet } from "../RandomPlanet/RandomPlanet.jsx";
import { StarshipDetails } from "../StarshipDetails/StarshipDetails.jsx";
import { ErrorButton } from "../error-button/error-button.jsx";
import {PeoplePage} from "../people-page/people-page.jsx";
import {ErrorIndicator} from "../error-indicator/error-indicator.jsx";
import {SwapiService} from "../../services/swapi-service.jsx";

export class App extends React.Component{
    constructor() {
        super();
        this.state = {
            showRandomPlanet: true,
            hasError:false
        };
        this.swapiService = new SwapiService();
    }

    toggleRandomPlanet() {
        this.setState((state) => {
            return {
                showRandomPlanet: !state.showRandomPlanet
            }
        });
    };

    componentDidCatch() {
        console.log('componentDidCatch()');
        this.setState({hasError:true})
    }

    render() {

        if(this.state.hasError) {
            return <ErrorIndicator/>
        }

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
                <ErrorButton/>

                <PeoplePage/>

                <div className='person-content'>
                    <div className='characters'>
                        <ItemList onItemSelected={this.onPersonSelected}
                                  getData={this.swapiService.getAllPlanets}
                                  renderItem={(item) => item.name}/>
                    </div>
                    <div className='person-card'>
                        <PersonDetails personId={this.state.selectedPerson}/>
                    </div>
                </div>

                <div className='person-content'>
                    <div className='characters'>
                        <ItemList onItemSelected={this.onPersonSelected}
                                  getData={this.swapiService.getAllStarships}
                                  renderItem={(item) => item.name}/>
                    </div>
                    <div className='person-card'>
                        <PersonDetails personId={this.state.selectedPerson}/>
                    </div>
                </div>
            </div>
        )
    }
}