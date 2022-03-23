
import "./App.css"
import NavBar from './components/NavBar/NavBar';
import CartWidget from './components/NavBar/CartWidget/CartWidget';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import "./scss/app.scss";


function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer titel={"List of Products"}/>
      
    </div>
  );
}

export default App;
