import "./App.css";
import NavBar from './components/NavBar/NavBar';
import "./scss/app.scss";
import Footer from "./components/Footer/Footer";

//Routes
import { BrowserRouter, Routes, Route } from "react-router-dom";

//Pages 
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Cart from "./components/Cart/Cart";






function App() {
  return (

    <div className="App">

      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path="/" element={<ItemListContainer/>}/>
          <Route path="/category/:categoryId" element={<ItemListContainer/>}/>
          <Route path="/item/:id" element={<ItemDetailContainer/>}/>
          <Route path="/detail" element={<ItemDetailContainer />}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="*" element={"error 404"}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
