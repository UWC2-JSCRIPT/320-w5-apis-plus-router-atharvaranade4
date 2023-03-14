import { useState, useCallback, useEffect } from "react"
import { Routes, Route } from "react-router-dom"
import Home from "./Home"
import CharacterList from "./CharacterList"
import CharacterDetails from "./CharacterDetails"

function App() {
  let [data, setData] = useState([])
  let [character, setCharacter] = useState({})
  let [isLoading, toggleLoading] = useState(false)
  let [error, setHasError] = useState('')

  const getData = async (id) => {
    let url = `https://swapi.dev/api/people/`
    fetch(url) 
    .then(response => response.json())
    .then(data => {
      setData(data.results)
      console.log(data)
      if(id) {
        let characterObj = data.results.find(item => item.name === id)
        setCharacter(characterObj)
      }
      toggleLoading(false);
    })
    .catch((error) =>{
      console.log(error)
      toggleLoading(false)
      setHasError(true)
    })
  }
  
  // useEffect(() => {
  //   getData()
  //   console.log(getData)
  // }, [])

  // const getData = useCallback(async (id) => {
  //   toggleLoading(true)
  //   try {
  //     let url = 'https://swapi.dev/api/people/'
  //     let response = await fetch(url)
  //     if(!response.ok) {
  //       throw new Error('Something went wrong!')
  //     }
  //     let receivedData = await response.json()
  //     console.log(receivedData.results)
  //     if(id) {
  //       let characterObj = receivedData.results.find(item => item.name === id)
        
  //       console.log(characterObj)
  //       console.log(id) // Id here is charid that comes from CharacterList       
  //       console.log({data})
  //       console.log({...character})

  //       setCharacter(characterObj)
  //     }
  //     setData(receivedData.results)
  //   } catch (error) {
  //     setHasError(error.message)
  //   }
  //   toggleLoading(false)
  // }, [])
  
  // console.log(getData)
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/characters" 
        element=
        {<CharacterList 
          getData={getData} 
          data={data} 
          isLoading={isLoading} 
          error={error} 
        />} 
      />
      <Route path="/characters/:charid" 
        element=
        {<CharacterDetails 
          getData={getData} 
          data={data}
          name= {character.name}
          birth_year={character.birth_year}
          height={character.height}
          // {...character}
          isLoading={isLoading} 
          error={error} 
        />} 
      />
    </Routes>
  )
}

export default App