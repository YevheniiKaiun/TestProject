import * as React from 'react';
import './PersonDetails.scss';
import {SwapiService} from "../../services/swapi-service.jsx";
import {ErrorButton} from "../error-button/error-button.jsx";

export class PersonDetails extends React.Component{
    constructor() {
        super();
        this.state = {
            person:1
        };
        this.swapiService = new SwapiService();
    };

    componentDidMount() {
        this.updatePerson();
    }

    componentDidUpdate(prevProps) {
        if (this.props.personId !== prevProps.personId) {
            this.updatePerson();
        }
    }

    updatePerson() {
        const { personId } = this.props;
        if (!personId) {
            return;
        }

        this.swapiService
            .getPerson(personId)
            .then((person) => {
                this.setState({ person });
            });
    }


    render() {

        if (!this.state.person) {
            return <div>Select a person from a list</div>;
        }

        const { id, name, gender,
            birthYear, eyeColor } = this.state.person;

        return (
            <div className='person-card-wrapper'>
                <img className="person-image"
                     src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
                     alt="character"/>
                <div className="card-body">
                    <h4>{name}  </h4>
                    <ul className="person-specifications">
                        <li className='person-specifications__list'>
                            <div className="person-specifications__list-item">Gender:</div>
                            <div>{gender}</div>
                        </li>
                        <li className="person-specifications__list">
                            <div className="person-specifications__list-item">Birth Year:</div>
                            <div>{birthYear}</div>
                        </li>
                        <li className="person-specifications__list">
                            <div className="person-specifications__list-item">Eye Color:</div>
                            <div>{eyeColor}</div>
                        </li>
                    </ul>
                </div>
                <ErrorButton/>
            </div>
        )
    }
}