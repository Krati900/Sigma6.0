import './App.css';
import PetAnimal from './Components/pet-animal/PetAnimal';
import WildAnimal from './Components/wild-animal/WildAnimal';
import Header from './Components/utils/Header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import './Components/CSS/animal.css';

function App() {
  return (
    <Router>
      <div className='animal-container'>
        <Header />
        <Routes>
          <Route path="/" element={<PetAnimal />} />
          <Route path="/wild-animal" element={<WildAnimal />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
