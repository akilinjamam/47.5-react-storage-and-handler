import logo from './logo.svg';
import './App.css';
import Cosmetics from './Components/Cosmetics/Cosmetics';
import Shoes from './Components/Cosmetics/Shoes';
import Utilities from './Utilities/Utilities';

function App() {
  return (
    <div className="App">
      <Cosmetics></Cosmetics>
      <Shoes></Shoes>
      <Utilities></Utilities>
    </div>
  );
}

export default App;
