import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import MenuItem from 'material-ui/MenuItem'

import Navbar from './Navigation/Navbar'
import DashboardView from './views/DashboardView/DashboardView'
import Product from './views/Product/Product'
import FavouriteList from './views/FavouriteList/FavouriteList'
import ProductList from './views/ProductList/ProductList'
import AddFood from './components/AddFood'
import ListFood from './components/ListFood'

import Search from './views/Search/Search'
import AddProduct from './views/AddProduct/AddProduct'
import Statement from './components/Statement'

const style = {
  links: {
    textDecoration: 'none'
  }
}

class App extends React.Component {
  state = {
    isStatementOpen: false,
    statementMessage: ''
  }

  toggleStatement = (message) => this.setState({
    isStatementOpen: !this.state.isStatementOpen,
    statementMessage: message || ''
  })

  render() {
    return (
      <div>
        <RouterTK
          toggleStatement={this.toggleStatement}
        />
        <Statement
          isStatementOpen={this.state.isStatementOpen}
          handleRequestClose={this.toggleStatement}
          statementMessage={this.state.statementMessage}
        />
      </div>
    )
  }
}

class RouterTK extends React.PureComponent {
  render() {
    return (
      <Router>
        <div>
          <Navbar>
            <Link
              to='/'
              style={style.links}
            >
              <MenuItem>
                Dashboard
          </MenuItem>
            </Link>
            <Link
              to='/productlist'
              style={style.links}
            >
              <MenuItem>
                Product List
          </MenuItem>
            </Link>
            <Link
              to='/favouritelist'
              style={style.links}
            >
              <MenuItem>
                Favourite
          </MenuItem>
            </Link>
            <Link
              to='/addproduct'
              style={style.links}>
              <MenuItem>
                Add Product
          </MenuItem>
            </Link>
            <Link
              to='/search'
              style={style.links}
            >
              <MenuItem>
                Search
          </MenuItem>

            </Link>
          </Navbar>
          <div>
            <Route path="/" exact={true} component={DashboardView}></Route>
            <Route path="/product/:key" component={Product}></Route>
            <Route path="/productlist" component={ProductList}></Route>
            <Route path="/favouritelist" component={FavouriteList}></Route>
            <Route path="/addproduct" component={() => <AddProduct toggleStatement={this.props.toggleStatement} />}></Route>
            <Route path='/search' component={Search}></Route>
            <Route path='/addfood' component={AddFood}></Route>
            <Route path='/addfoodlist' component={ListFood}></Route>
          </div>
        </div>
      </Router>
    )
  }
}

export default App;
