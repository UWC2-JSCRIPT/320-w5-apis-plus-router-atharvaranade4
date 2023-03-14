import PropTypes from "prop-types"
import { Link } from "react-router-dom"

function Character({name, index}){
return (
    <>
    <div>
        <p>{name}</p>
        <Link to={`/characters/${name}`}>
            <button>Character Profile</button>
        </Link>
    </div>
    </>
)}

Character.propTypes = {
    name: PropTypes.string.isRequired
}
      
export default Character
