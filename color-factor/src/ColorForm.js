import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


function ColorForm({ addColor }) {

    const navigate = useNavigate();

    const INITIAL_STATE = {
        name: "",
        value: "",
    }
    const [formData, setFormData] = useState(INITIAL_STATE);

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(data => ({
            ...data,
            [name]: value
        }))
    }

    const handleSubmit = e => {
        e.preventDefault();
        if (formData.name){
            addColor(formData);
            setFormData(INITIAL_STATE);
            navigate('/colors');            
        } else {
            navigate('/colors');
        }

    }

    return (
        <div className="Colors">
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Color Name:</label>
                <input 
                    id="name" 
                    name="name" 
                    value={formData.name} 
                    onChange={handleChange}
                />
                <label htmlFor="value">Color Value:</label>
                <input 
                    id="value"
                    type="color" 
                    name="value" 
                    value={formData.value} 
                    onChange={handleChange}
                />
                <button>Add Color</button>
            </form>
            <a href="/">Go back</a>
        </div>
    )
}

export default ColorForm;