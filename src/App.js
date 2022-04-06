import "./App.css";
import NavBar from './components/NavBar/NavBar';
import "./scss/app.scss";
import Footer from "./components/Footer/Footer";

//Routes
import { BrowserRouter, Routes, Route } from "react-router-dom";

//Pages 
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Home from "./pages/Home";





function App() {
  return (

    <div className="App">

      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path="/" element={<ItemListContainer/>}/>
          <Route path="/category/:id" element={<ItemListContainer/>}/>
          <Route path="/item/:id" element={<ItemDetailContainer/>}/>
          <Route path="/detail" element={<ItemDetailContainer />}/>
          <Route path="*" element={"error 404"}/>
          <Route path="/home" element={<Home/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
