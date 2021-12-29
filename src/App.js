import {BrowserRouter, Route, Switch} from "react-router-dom";

import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";

import Header from "./layout/Header";
import Footer from "./layout/Footer";
import Banner from "./layout/Banner";
import Container from "./Container";
import AddProduct from "./AddProduct";



function App() {
  return (
    <BrowserRouter>
      <Header />
      <Banner />
      <Switch>
      <Route exact path="/">
        <Container nom="Boom"/>
      </Route>
      <Route path="/addproduct" component={AddProduct} />
      {/*<Route path="/editProduct" component={Editproduct} />*/}
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
