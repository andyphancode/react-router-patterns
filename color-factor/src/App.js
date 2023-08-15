import {
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import './App.css';
import Home from './Home';
import Colors from './Colors';
import ColorForm from './ColorForm';
import { useState, useEffect } from "react";

function App() {
  const [colors, setColors] = useState(JSON.parse(localStorage.getItem("colors")) || [
      {
        name: "red",
        value: "red"
      },
      {
        name: "green",
        value: "green"
      },
      {
        name: "blue",
        value: "blue"
      }
  ]);

  useEffect(
    // updates localstorage every time we add a color, and keeps color array in sync
    () => {
      localStorage.setItem("colors", JSON.stringify(colors));
    }
    ,
    [colors]
  );

  function addColor(newColor){
    setColors(colors => [...colors, newColor])
  };

  const renderItems = () => {
    return (
      <ul>
      {(colors).map(color => (
          <a href={`/colors/${color.name}`}>
              <li key={color.name}>
                  {color.name}
              </li>                        
          </a>
      ))}
      </ul>     
    )
  }

  
  console.log(JSON.parse(localStorage.getItem('colors')));
  console.log(colors);

  return (
    <div className="App">
      <div className="main">
        <Routes>
          <Route path="/colors" element={<Home colors={colors} renderItems={renderItems}/>}></Route>
          <Route path="/colors/new" element={<ColorForm addColor={addColor}/>}></Route>
          <Route path="/colors/:color" element={<Colors colors={colors}/>}></Route>
          <Route path="*" element= {<Navigate replace to="/colors" />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
