import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';



export default function CharacterList(){   
    const [data, setData] = useState([])
    const [isLoading, toggleLoading] = useState(true)
    const [hasError, setHasError] = useState(false)
    
    useEffect(() => {    
    let url = `https://swapi.dev/api/people/`
    fetch(url) 
    .then(response => response.json())
    .then(data => {
        setData(data.results)
        console.log(data)
        toggleLoading(false);
    })
    .catch((error) =>{
      console.log(error)
      toggleLoading(false)
      setHasError(true)
    })
    }, []) // fetch data and update only when getdata changes

    const peopleList = data.map((item ,index) =>{
        // console.log(index, item)
        return(
            <>
            <p key={index}>
            <Link
                to={`${index+1}`}>
                <button>{item.name} Profile</button>
            </Link>
            </p>
            </>
        )
    })

    if (isLoading){
        return <p>Loading characters...</p>
    }

    if (hasError) {
        return <p>Error loading characters</p>
    }      


    return (
        <>
            <h1>Star Wars Characters</h1>
            <div>
                {peopleList}          
            </div>
        </>
    )
}