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

export class App extends React.Component{
    constructor() {
        super();
        this.state = {
            showRandomPlanet: true,
            hasError:false
        };
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
                <PeoplePage/>
                <PeoplePage/>
            </div>
        )
    }
}