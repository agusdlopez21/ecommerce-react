import './App.css';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemList/ItemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout';
import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer';
import { CartProvider } from './contexts/CartContext';
import { useEffect } from 'react';
import { createAllProducts } from './utils/products';

function App() {
    //agregar los productos al firebase
    /* useEffect(() => {
      createAllProducts()
    }, []); */
    return (
      <BrowserRouter basename='/Ecomerce-ShoeBrand'>
        <CartProvider>
          <NavBar />
            <Routes>
              <Route path='/' element={<ItemListContainer greeting={'Welcome to my shop'} />} />
              <Route path='/category/:categoryId' element={<ItemListContainer greeting={'Welcome to my shop'} />} />
              <Route path='/item/:id' element={<ItemDetailContainer />} />
              <Route path='/cart' element={<Cart />} />
              <Route path='/checkout' element={<Checkout />} />
            </Routes>
        </CartProvider>
      </BrowserRouter>
    );
}

export default App;
