import { useState, useEffect } from "react"
import { useParams, useNavigate, Link } from "react-router-dom"
import PropTypes from "prop-types"

function CharacterDetails({getData, data, isLoading, error, name, birth_year, height}) {
  let {charid} = useParams()
  // let [character, setCharacter] = useState({})
  let navigate = useNavigate()
  useEffect(() => {
    getData(charid)
  }, [charid])
  let content = (
    <div>
      <h3>Found no data</h3>
    </div>
  )
  console.log(data)
  console.log(typeof {data}) 
  console.log(typeof data)

  
  // let characterObj = data.find(item => item.name === charid)
  // console.log(charid) // Id here is charid that is comes from CharacterList
  // setCharacter(characterObj)
  // console.log(character)


  if(data.length > 0) {
    content = (
      <div className=''>
        <Link to="/">Back to Home</Link>
        <h3>Name: {name}</h3>
        <h3>Birth year: {birth_year}</h3>
        <h3>Height: {height}</h3>
      </div>
    )
  }
  if(error) {
    content = navigate('/error')
  }
  if(isLoading) {
    content = (
      <div className=''>
        <h3>Loading...</h3>
      </div>
    )
  }
  return (
    <div>
      {content}
    </div>
  )
}

CharacterDetails.propTypes = {
  getData: PropTypes.func.isRequired,
  data: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired,
  error: PropTypes.string.isRequired,
  name: PropTypes.string,
  birth_year: PropTypes.string,
  height: PropTypes.string
}

export default CharacterDetails