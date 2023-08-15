import React from 'react';
import { useParams } from 'react-router-dom';


function DogDetails({dogs}) {
    const {name} = useParams();
    console.log(name);
    console.log(dogs);
    if (name) {
        dogs.forEach((dog) => {
            console.log(dog.name.toLowerCase());
            console.log(name);
        });
        const filteredDog = dogs.filter(d => d.name.toLowerCase() === name)[0];
        return (
            <div className="DogDetails">
                <a href={`/dogs/${filteredDog.name}`}>
                    <img src={filteredDog.src} alt={filteredDog.name} />                    
                </a>
                <h1> This is a {filteredDog.name} </h1>
                <ul>
                {filteredDog.facts.map(f => (
                    <li>{f}</li>
                ))}
                </ul>   
                <a href="/dogs">Go back</a>
            </div>
            
        )
    }

    return null;
}

export default DogDetails;