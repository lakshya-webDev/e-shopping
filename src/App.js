import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import SingleProduct from "./components/SingleProduct";
import ProductListing from "./components/ProductListing";
import ProductComponent from "./components/ProductComponent";
import PageNotfound from "./components/PageNotfound";
import './components/component.scss'
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" exact element={<ProductListing />} />
          <Route path="/product/:productId" exact element={<SingleProduct />} />
          <Route path="/404/" exact element={<PageNotfound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
