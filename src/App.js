import logo from './logo.svg';
import './App.css';
import NavBar from "./components/navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import HeroPage from "./components/heroPage";
import Meals from "./components/meals";



function App() {
  return (
    <div className="App container">
      <NavBar/>
      <HeroPage/>
      <Meals/>
    </div>
  );
}

export default App;
