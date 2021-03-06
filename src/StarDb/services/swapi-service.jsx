import * as React from 'react';

export  class SwapiService extends React.Component{
  constructor() {
    super();
    this.apiBase = 'https://swapi.co/api';
    this._extractId = (item) => {
      const idRegExp = /\/([0-9]*)\/$/;
      return item.url.match(idRegExp)[1];
    };
    this._transformPlanet = (planet) => {
      return {
        id : this._extractId(planet),
        name: planet.name,
        population: planet.population,
        rotationPeriod: planet.rotation_period,
        diameter: planet.diameter
      }
    };

    this._trnsformaStarship = (starship) => {
      return {
        id: this._extractId(starship),
        name: starship.name,
        model: starship.model,
        manufacturer: starship.manufacturer,
        costInCredits: starship.cost_in_credits,
        length: starship.length,
        crew: starship.crew,
        passengers: starship.passengers,
        cargoCapacity: starship.cargo_capacity
      }
    };

    this._transformPerson = (person) => {
      return {
        id: this._extractId(person),
        name: person.name,
        gender: person.gender,
        birthYear: person.birth_year,
        eyeColor: person.eye_color
      }
    };

    this.getResource = async (url) => {
      const res = await fetch(`${this.apiBase}${url}`);

      if (!res.ok) {
        throw new Error(`Could not fetch ${url}` +
            `, received ${res.status}`)
      }
      return await res.json();
    };

    this.getAllPeople = async () => {
      const res = await this.getResource(`/people/`);
      return res.results.map(this._transformPerson);
    };

    this.getPerson = async (id) => {
      const person = await this.getResource(`/people/${id}/`);
      return this._transformPerson(person);
    };

    this.getAllPlanets = async () => {
      const res = await this.getResource(`/planets/`);
      return res.results.map(this._transformPlanet);
    };

    this.getPlanet = async (id) => {
      const planet = await this.getResource(`/planets/${id}/`);
      return this._transformPlanet(planet);
    };

    this.getAllStarships = async () => {
      const res = await this.getResource(`/starships/`);
      return res.results.map(this._trnsformaStarship);
    };

    this.getStarship = async (id) => {
      const starship =  this.getResource(`/starships/${id}/`);
      return this._trnsformaStarship(starship);
    }
  };







}
