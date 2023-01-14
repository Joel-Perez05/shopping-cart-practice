import './App.css';import Header from './components/Header';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import MyCart from './components/MyCart';


function App() {

  return (
    <BrowserRouter>
      <Header />
      <div className="App">
      <Routes>
        <Route element={<Home />} path="/" exact/>
        <Route element={<MyCart />} path="/cart" />
      </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
