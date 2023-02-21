import { Link } from "react-router-dom";

function Home() {
  return (
    <div className=''>
        <h3>Home</h3>
        <Link to={"/characters"}>
            <button> Query Star-Wars characters</button>
        </Link>
    </div>
  )
}
    
export default Home