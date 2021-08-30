import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from './components/Header';
import MainPage from './pages/MainPage';
import CartPage from './pages/CartPage';
import DetailsPage from './pages/DetailsPage';
import LoginPage from './pages/LoginPage';

import './css/App.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
    this.addProductToCart = this.addProductToCart.bind(this);
    this.removeProductOfCart = this.removeProductOfCart.bind(this);

    this.state = {
      products: [],
      cartProducts: [],
    };
  }

  addProductToCart(id) {
    const { products } = this.state;
    const product = products.find((prod) => prod.id === id);
    this.setState((prevState) => ({
      cartProducts: [...prevState.cartProducts, product],
    }));
  }

  removeProductOfCart(id) {
    const { cartProducts: products } = this.state;
    const cartProducts = products.filter((prod) => prod.id !== id);
    this.setState({ cartProducts });
  }

  render() {
    const {
      products, cartProducts, loading,
    } = this.state;
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={LoginPage} />
          {/* faltou exibir os produtos na MainPage */}
          <Route exact path="/products" render={() => <MainPage products={products} loading={loading} addToCart={this.addProductToCart} />} />
          {/* faltou conectar as paginas Cart e Details com o redux */}
          <Route exact path="/cart" render={() => <CartPage products={cartProducts} onClick={this.removeProductOfCart} />} />
          <Route path="/details/:id" render={(props) => <DetailsPage {...props} products={products} addToCart={this.addProductToCart} />} />
        </Switch>
      </div>
    );
  }
}
