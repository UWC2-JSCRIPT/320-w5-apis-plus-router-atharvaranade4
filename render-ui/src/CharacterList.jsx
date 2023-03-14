import { useEffect } from "react"
import { Link } from "react-router-dom"
import Character from "./Character"
import PropTypes from "prop-types"

function CharacterList({getData, data, isLoading, error}) {
    useEffect(() => {
    getData()
    }, [])

    let people = data.map(item => 
    <Character 
        key={item.created} 
        name={item.name} 
    />)

    let content = <h3>Found no data</h3>
    console.log(data)
    if(data.length > 0) {
    content = people
    }
    if(error) {
    }
    if(isLoading) {
    content = <h3>Loading...</h3>
    }

    return (
    <div className=''>
        <Link to={`/`}>
            <button>Back to Home</button>
        </Link>
        {content}
    </div>
    )
}

CharacterList.propTypes = {
  getData: PropTypes.func.isRequired,
  data: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired,
  error: PropTypes.string.isRequired
}

export default CharacterList