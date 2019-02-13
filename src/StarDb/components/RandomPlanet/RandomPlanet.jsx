import * as React from 'react';
import './RandomPlanet.scss';
import { SwapiService } from "../../services/swapi-service.jsx";
import { Spinner } from "../spinner/spinner.jsx";
import {ErrorIndicator} from "../error-indicator/error-indicator.jsx";


export class RandomPlanet extends React.Component{
    constructor(){
        super();
        this.state = {
            planet: {},
            loading: true
        };

        this.swapiService = new SwapiService();

        this.updatePlanet =  () => {
            const id = Math.floor(Math.random()*25) + 3;

            this.swapiService
                .getPlanet(id)
                .then(this.onPlanetLoaded)
                .catch(this.onError);

        };
        this.onError = (err) => {
            this.setState({
                error: true,
                loading: false
            });
        };
        this.onPlanetLoaded = (planet) =>{
            this.setState({
                planet,
                loading:false,
                error:false
            });
        };
    }

    componentDidMount() {
        this.updatePlanet();
        this.interval = setInterval(this.updatePlanet, 10000);
        clearInterval(this.interval);
    }

    componentWillMount() {
        clearInterval(this.interval);
    }


    render() {

        const {planet, loading, error } = this.state;

        const hasData = !(loading || error);
        const errorMessage = error ? <ErrorIndicator/> : null;
        const spinner = loading ? <Spinner /> : null;
        const content = hasData ? <PlanetView planet={planet}/> : null;

        return (
            <div className="random-planet-wrapper">
                {errorMessage}
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
                     src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
                     alt="planet"/>
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