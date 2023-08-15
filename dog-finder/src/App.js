import './App.css';
import DogList from './DogList';
import DogDetails from './DogDetails';
import { whiskey, duke, perry, tubby } from './DogPics';
import {
  Routes,
  Route,
  Navigate
} from "react-router-dom";

function App({dogs}) {
  return (
    <div className="App">
      <div className="main">
        <Routes>
          <Route path="/dogs" element={<DogList dogs={dogs}/>}></Route>
          <Route path="/dogs/:name" element={<DogDetails dogs={dogs}/>}></Route>
          <Route path="*" element= {<Navigate replace to="/dogs" />} />
        </Routes>
      </div>
    </div>
  );
}

App.defaultProps = {
  dogs: [
    {
      name: "Whiskey",
      age: 5,
      src: whiskey,
      facts: [
        "Whiskey loves eating popcorn.",
        "Whiskey is a terrible guard dog.",
        "Whiskey wants to cuddle with you!"
      ]
    },
    {
      name: "Duke",
      age: 3,
      src: duke,
      facts: [
        "Duke believes that ball is life.",
        "Duke likes snow.",
        "Duke enjoys pawing other dogs."
      ]
    },
    {
      name: "Perry",
      age: 4,
      src: perry,
      facts: [
        "Perry loves all humans.",
        "Perry demolishes all snacks.",
        "Perry hates the rain."
      ]
    },
    {
      name: "Tubby",
      age: 4,
      src: tubby,
      facts: [
        "Tubby is really stupid.",
        "Tubby does not like walks.",
        "Angelina used to hate Tubby, but claims not to anymore."
      ]
    }
  ]
}

export default App;
