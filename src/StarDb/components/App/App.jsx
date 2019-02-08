import * as React from 'react';
import './App.scss';
import { Header } from "../Header/Header.jsx";
import { ItemList } from "../ItemList/ItemList.jsx";
import { PersonDetails } from "../PersonDetails/PersonDetails.jsx";
import { PlanetDetails } from "../PlanetDetails/PlanetDetails.jsx";
import { RandomPlanet } from "../RandomPlanet/RandomPlanet.jsx";
import { StarshipDetails } from "../StarshipDetails/StarshipDetails.jsx";

export class App extends React.Component{
    render() {
        return (
            <div className='Stardb-wrapper'>
                <Header />
                <RandomPlanet />

                <div className='person-content'>
                    <div className='characters'>
                        <ItemList />
                    </div>
                    <div className='person-card'>
                        <PersonDetails />
                    </div>
                </div>
            </div>
        )
    }
}