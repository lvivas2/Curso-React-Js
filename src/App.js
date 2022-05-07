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
import Page404 from "./pages/Page404/Page404";

//contex

import {CartProvider} from "./Contex/CartContex";

// MUI



function App() {
  return (

    <div className="App">
      <CartProvider> 
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path="/" element={<ItemListContainer/>}/>
          <Route path="/category/:categoryId" element={<ItemListContainer/>}/>
          <Route path="/item/:id" element={<ItemDetailContainer/>}/>
          <Route path="/detail" element={<ItemDetailContainer />}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="*" element={<Page404/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;
