import React from 'react';
import { useParams } from 'react-router-dom';
import './Colors.css'

function Colors({colors}) {

    const {color} = useParams();
    console.log(colors, color)
    if (color) {

        const filteredColor = colors.filter(c => c.name.toLowerCase() === color)[0];

        return (
            <div className="Color" style={{ backgroundColor: `${filteredColor.value}`}}>
                <h1 className="Color-heading"> This is {filteredColor.name} </h1>
                <a href="/colors">Go back</a>
            </div>
        );
    }

    return null;

}

export default Colors;