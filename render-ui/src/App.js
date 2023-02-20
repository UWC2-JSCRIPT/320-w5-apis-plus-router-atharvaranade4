import { useEffect, useState } from 'react';
import './App.css';
import CharacterDetails from './CharacterDetails';
import CharacterList from './CharacterList';
import { Route, Routes } from 'react-router-dom'

function App() {
  const [data, setData] = useState([])
  const [characterObject, setCharacter] = useState({})
  const [isLoading, toggleLoading] = useState(true)
  const [hasError, setHasError] = useState(false)

  const getData = useEffect(() => {
    let url = `https://swapi.dev/api/people/`
    fetch(url) 
    .then(response => response.json())
    .then(data => {
      // create {id} param to use to query particular character details
      
      // query02: for character details
        // if(){ 
        //   let characterObject = data.results.find(item => item.name === id)
        //   console.log(characterObject)
        //   setCharacter(characterObject)
        // }

        // query01: for all characters
        setData(data.results)
        console.log(data)
        toggleLoading(false);
    })
    .catch((error) =>{
      console.log(error)
      toggleLoading(false)
      setHasError(true)
    })
  
  }, [])

  return (
    <>
      <h3>Home</h3>
      <p>Click to get StarWars characters List</p>
      <button to="/characters">Query list</button>
    <Routes>
      {/* <Route path="/" element={<Home />} /> */}
      <Route 
        path="/characters" 
        element=
          {<CharacterList 
          getData={getData} 
          data={data}
          isLoading={isLoading} 
          hasError={hasError}
        />} 
      />
      {/* <Route 
        path="/characters/:id" 
        element=
          {<CharacterDetails 
          getData={getData} 
          data={data} {...character}
        />} 
      /> */}
    </Routes>
    </>
  );
}

export default App;
