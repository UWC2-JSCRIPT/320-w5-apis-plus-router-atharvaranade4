import React, { useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {useParams} from 'react-router-dom';

export default function CharacterDetails({}){
    const [profile, setProfile] = useState({})
    const [isLoading, toggleLoading] = useState(true)
    const [hasError, setHasError] = useState(false)
    
    const {charId} = useParams()
    console.log(charId)

    useEffect(() => {    
        let url = `https://swapi.dev/api/people/${charId}/`
        console.log(url)
        fetch(url) 
        .then(response => response.json())
        .then(data => {
            setProfile(data)
            toggleLoading(false)
        })
        .catch((error) =>{
        console.log(error)
        toggleLoading(false)
        setHasError(true)
        })
    }, [charId])

    if (isLoading) {
    return <p>loading...</p>
    }

    if (hasError) {
    return <p>Error!</p>
    }

    let displayContent = (
        <>
        <div className=''>
          <h3>Name: {profile.name}</h3>
          <h3>Birth year: {profile.birth_year}</h3>
          <h3>Height: {profile.height}</h3>
        </div>        
        <Link to="/characters"><button>Character List</button></Link>
        <Link to="/"><button>Home</button></Link>
        </>
    )   
    return (
        <>
            <h1>Profile Details</h1>
            <div>
                {displayContent}          
            </div>
        </>
    )
}
