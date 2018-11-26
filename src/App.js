import React from 'react';
import DashboardView from './views/DashboardView/DashboardView'
import Navbar from './Navigation/Navbar'
import Product from './views/Product/Product'
import FavouriteList from './views/FavouriteList/FavouriteList'
import ProductList from './views/ProductList/ProductList'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import MenuItem from 'material-ui/MenuItem';

const App = (props) => (
  <div>
    <Router>
      <div>
        <Navbar>
          <Link to='/'>
            <MenuItem>
              Dashboard
          </MenuItem>
          </Link>

          <Link to='/product'>
            <MenuItem>
              Product
          </MenuItem>
          </Link>

          <Link to='/productlist'>
            <MenuItem>
              Product List
          </MenuItem>
          </Link>
          <Link to='/favouritelist'>
            <MenuItem>
              Favourite
          </MenuItem>
          </Link>
          <Link to='/addproduct'>
          <MenuItem>
            Add Product
          </MenuItem>
          </Link>
        </Navbar>
        <div>
          <Route path="/" exact={true} component={DashboardView}></Route>
          <Route path="/product/:key" component={Product}></Route>
          <Route path="/productlist" component={ProductList}></Route>
          <Route path="/favouritelist" component={FavouriteList}></Route>
          <Route path="/addproduct" component={ProductList}></Route>
        </div>
      </div>
    </Router>
  </div>
)

export default App;
