import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Navbar from './components/navbar';
import productList from './components/productList';
import { Container } from './styledComponents/container.styled';
import GlobalStyle from './styledComponents/global.styled';
import productDescription from "./components/productDescription"
import cart from "./components/cart";
import checkout from "./components/checkout";

function App() {
  return (
    
      <BrowserRouter>
        <GlobalStyle />
        <Navbar />
        <Container>
          <Switch>
            <Route exact path="/cart" component={cart}/>
            <Route exact path="/checkout" component={checkout}/>
            <Route exact path="/:category" component={productList}/>
            <Route exact path="/product/:id" component={productDescription}/>
            <Redirect to="/all"/>
          </Switch>
        </Container>
      </BrowserRouter>
    
  );
}

export default App;
