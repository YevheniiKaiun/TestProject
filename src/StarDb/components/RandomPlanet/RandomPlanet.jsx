import * as React from 'react';
import './RandomPlanet.scss';
import { SwapiService } from "../../services/swapi-service.jsx";
import { Spinner } from "../spinner/spinner.jsx";


export class RandomPlanet extends React.Component{
    constructor(){
        super();
        this.state = {
            id: null,
            name: null,
            population: null,
            rotationPeriod: null,
            diameter: null,
            loading: true
        };

        this.swapiService = new SwapiService();
        this.updatePlanet();
        // this.onPlanetLoaded = (planet) => {
        //     this.setState({
        //         planet,
        //         loading: false,
        //         error: false
        //     });
        // };


        this.onError = (err) => {
            this.setState({
                error: true,
                loading: false
            });
        };

    }



    updatePlanet() {
        const id = Math.floor(Math.random()*17) + 2;
        // const id = 12;
        this.swapiService
            .getPlanet(id)
            .then((planet) => {
                this.setState({
                    id,
                    name: planet.name,
                    population: planet.population,
                    rotationPeriod: planet.rotationPeriod,
                    diameter: planet.diameter,
                    loading:false,
                    error: false
                })
            })
            .catch(this.onError);

    };

    render() {

        const { loading } = this.state;

        const spinner = loading ? <Spinner /> : null;
        const content = !loading ? <PlanetView planet={this.state}/> : null;

        return (
            <div className="random-planet-wrapper">
                {spinner}
                {content}
            </div>
        );
    }
}


const PlanetView = ({ planet }) => {

    const { id, name, population,
        rotationPeriod, diameter } = planet;

    return (
        <React.Fragment>
            <div className="random-planet">
                <img className="planet-image"
                     src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} />
                <div className='planet-param'>
                    <div>{name}</div>
                    <ul className="planet-list">
                        <li className="planet-list__item">
                            <div className="term">Population:</div>
                            <div>{population}</div>
                        </li>
                        <li className="planet-list__item">
                            <div className="term">Rotation Period:</div>
                            <div>{rotationPeriod}</div>
                        </li>
                        <li className="planet-list__item">
                            <div className="term">Diameter:</div>
                            <div>{diameter}</div>
                        </li>
                    </ul>
                </div>
            </div>
        </React.Fragment>
    );
};