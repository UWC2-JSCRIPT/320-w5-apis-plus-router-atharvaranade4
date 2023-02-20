import React, { useEffect, useState } from "react";
import PropTypes from 'prop-types';


export default function CharacterDetails({people}){
    const [profile, setProfile] = useState('')
    const [loading, toggleLoading] = useState(true)
    const [hasError, setHasError] = useState(false)

    useEffect(() =>{
        fetch(`https://swapi.dev/api/people/${people}`) 
        .then(response => response.json())
        .then(data => {
            setProfile(data);
            toggleLoading(false);
        })
        .catch((error) =>{
            console.log(error)
            toggleLoading(false)
            setHasError(true)
        })
        // , // Handling error with React
        // (error) => {
        //     console.log(error)
        //     toggleLoading(false)
        //     setHasError(true)
        // }
    }, [])

    if (loading){
        return <p>Loading character details...</p>
    }

    if (hasError) {
        return <p>Error loading character details</p>
    }

    return (
        <>
            <h3>Star Wars Character Details</h3>
            <div>
                <p>{profile.name}</p>
                <p>{profile.birth_year}</p>
                <p>{profile.gender}</p>               
            </div>
        </>
    )
}

// CharacterDetails.propTypes = {
//     people: PropTypes.string.isRequired
// }
