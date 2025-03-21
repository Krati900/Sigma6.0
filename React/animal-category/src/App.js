import './App.css';
import PetAnimal from './Components/pet-animal/PetAnimal';
import WildAnimal from './Components/wild-animal/WildAnimal';
import Header from './Components/utils/Header';
import './Components/CSS/animal.css'
function App() {
  return (
    <div>
      <Header />
      <WildAnimal />
      <PetAnimal />
    </div>
  );
}

export default App;
