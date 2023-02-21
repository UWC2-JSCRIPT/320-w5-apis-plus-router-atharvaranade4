import './App.css';
import { Route, Routes } from 'react-router-dom'
import Home from "./Home"
import CharacterList from './CharacterList';
import CharacterDetails from './CharacterDetails';

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/characters" element={<CharacterList/>}/>
      <Route path="/characters/:charId" element={<CharacterDetails/>} 
      />
    </Routes>
    </>
  );
}

export default App;
