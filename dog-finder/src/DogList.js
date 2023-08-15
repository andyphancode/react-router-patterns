import React from 'react'

function DogList({dogs}) {
    return (
        <div className="DogList">
            {dogs.map(d => (
            <div key={d.name}>
                <h1> This is a {d.name} </h1> 
                <a href={`/dogs/${d.name.toLowerCase()}`}>
                    <img src={d.src} alt={d.name} />                    
                </a>           
            </div>
            ))}
        </div>
    )
}

export default DogList;