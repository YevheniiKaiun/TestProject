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

        this.updatePlanet =  () => {
            const id = Math.floor(Math.random()*25) + 3;
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
                    })
                })

        };
    }

    componentDidMount() {
        this.updatePlanet();
        this.interval = setInterval(this.updatePlanet, 10000);
        // clearInterval(this.interval);
    }



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
                            <div className="planet-list__item-info">Population:</div>
                            <div>{population}</div>
                        </li>
                        <li className="planet-list__item">
                            <div className="planet-list__item-info">Rotation Period:</div>
                            <div>{rotationPeriod}</div>
                        </li>
                        <li className="planet-list__item">
                            <div className="planet-list__item-info">Diameter:</div>
                            <div>{diameter}</div>
                        </li>
                    </ul>
                </div>
            </div>
        </React.Fragment>
    );
};