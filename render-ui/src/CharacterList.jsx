import React, { useEffect, useState } from "react";
import PropTypes from 'prop-types';


export default function CharacterList({getData, data, isLoading, hasError}){   
    useEffect(() =>{
        getData()
    },[getData])  // fetch data and update only when getdata changes

    let people = data.map(item =>
        `<div>
        <p>CharacterName:${item.name}</p>
        <button to={/characters/${item.name}}>${item.name} profile details</button>
        </div>
        `
        )
    let displayContent = <h3>Found no data</h3>
    if (data.length > 0) {
        displayContent = people
    }      

    if (isLoading){
        displayContent = <p>Loading character details...</p>
    }

    if (hasError) {
        displayContent = <p>Error loading character details</p>
    }

    return (
        <>
            <h1>All Star Wars</h1>
            <div>
                {displayContent}          
            </div>
        </>
    )
}

CharacterList.propTypes = {
    getData: PropTypes.func.isRequired,
    data: PropTypes.array.isRequired,
    isLoading: PropTypes.bool.isRequired,
    hasError: PropTypes.bool.isRequired
}