import "./App.css";
import Home from "./Home";
import About from "./About";
import Product from "./Product";
import Login from "./Login";
import Cart from "./Cart";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./ThemeContext";
import { CartProvider } from "./CartC"; 
import Menu from "./Menu";
import GlobalStyles from "./GlobalStyle";

function App() {
  return (
    <ThemeProvider>
      <CartProvider>
        <BrowserRouter>
          <GlobalStyles>
            <Menu />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/product/:id" element={<Product />} />
              <Route path="/login" element={<Login />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
          </GlobalStyles>
        </BrowserRouter>
      </CartProvider>
    </ThemeProvider>
  );
}

export default App;


