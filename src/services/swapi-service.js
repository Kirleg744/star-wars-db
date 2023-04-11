export default class SwapiService {
    _apibase = "https://swapi.dev/api";
    _imageBase = "https://starwars-visualguide.com/assets/img/";

    getResource = async (url) => {
        const res = await fetch(`${this._apibase}${url}`);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}``, received ${res.status}`);
        }
        return await res.json();
    };

    getAllPeople = async () => {
        const res = await this.getResource("/people/");
        return res.results.map(this._transformPerson);
    };

    getPerson = async (id) => {
        const person = await this.getResource(`/people/${id}/`);
        return this._transformPerson(person);
    };

    getPersonImage = ({ id }) => {
        return `${this._imageBase}characters/${id}.jpg`;
    };

    getAllPlanets = async () => {
        const res = await this.getResource("/planets/");
        return res.results.map(this._transformPlanet);
    };

    getPlanet = async (id) => {
        const planet = await this.getResource(`/planets/${id}/`);
        return this._transformPlanet(planet);
    };

    getPlanetImage = ({ id }) => {
        return `${this._imageBase}planets/${id}.jpg`;
    };

    getAllStarships = async () => {
        const res = await this.getResource("/starships/");
        return res.results.map(this._transformStarship);
    };

    getStarship = async (id) => {
        const starship = await this.getResource(`/starships/${id}/`);
        return this._transformStarship(starship);
    };

    getStarshipImage = ({ id }) => {
        return `${this._imageBase}starships/${id}.jpg`;
    };

    _extractId(item) {
        const idRegExp = /\/([0-9]*)\/$/;
        return item.url.match(idRegExp)[1];
    }

    _transformPlanet = (planet) => {
        return {
            id: this._extractId(planet),
            name: planet.name,
            population: planet.population,
            rotationPeriod: planet.rotation_period,
            diameter: planet.diameter,
        };
    };

    _transformPerson = (person) => {
        return {
            id: this._extractId(person),
            name: person.name,
            birthYear: person.birth_year,
            gender: person.gender,
            eyeColor: person.eye_color,
        };
    };

    _transformStarship = (starship) => {
        return {
            id: this._extractId(starship),
            name: starship.name,
            model: starship.model,
            manufacturer: starship.manufacturer,
            costInCredits: starship.cost_in_credits,
            length: starship.length,
            crew: starship.crew,
            passengers: starship.passengers,
            cargoCapacity: starship.cargo_capacity,
        };
    };
}



