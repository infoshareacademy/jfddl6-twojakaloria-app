import React from "react";
import TextField from "material-ui/TextField";
import SelectField from "material-ui/SelectField";
import MenuItem from "material-ui/MenuItem";
import Paper from "material-ui/Paper";
import RaisedButton from "material-ui/RaisedButton";
import { Grid, Row } from "react-flexbox-grid";

import './AddProduct.css'

const categories = ["Vegetables", "Fruits", "Drinks", "Meat", "Other"];

const style = {
  paper: {
    margin: 12,
    padding: 50
  },
  button: {
    marginTop: 50
  },
  item: {
    float: "left"
  }
};

const initialState = {
  name: '',
  category: '',
  kcal: '',
  protein: '',
  fat: '',
  carbohydrates: '',
  url: '',
  isFavorite: false
};
class AddProduct extends React.Component {

  constructor(props) {
    super(props)
    this.state = initialState
  }

  reset() {
    this.setState(initialState)
  }

  handleChange = (event, index, value) => this.setState({ category: value });

  makeTextFieldHandler = fieldName => event => this.setState({ [fieldName]: event.target.value })

  sendToFirebase = () => {
    let product = this.state
    fetch('https://twoja-kaloria.firebaseio.com/products.json', {
      method: 'POST',
      body: JSON.stringify(product)
    })
  }

  handleClick = (event) => {
    if (this.state.name !== '' && this.state.name.length < 30 && this.state.kcal !== '' && this.state.category !== '') {
      this.props.toggleStatement('Product was added successfully!')
      this.sendToFirebase()
      this.reset()
    }  else {
      this.props.toggleStatement('Something went wrong! Please try again! :)')
    }
  }

  render() {
    return (
      <Paper style={style.paper}>
        <Grid fluid>
          <Row center="xs">
            <h1>Add product</h1>
          </Row>
          <div>
            <div>
              <Row center="xs">
                <TextField 
                  hintText="Product name"
                  fullWidth={true}
                  value={this.state.name}
                  onChange={this.makeTextFieldHandler('name')}
                  />
              </Row>
            </div>
            <Row center="xs">
              <TextField
                type="number"
                 hintText="Kcal"
                 fullWidth={true}
                 value={this.state.kcal}
                 onChange={this.makeTextFieldHandler('kcal')}
                 />
            </Row>
            <Row center="xs">
              <TextField
                type="number"
                 hintText="Protein in grams"
                 fullWidth={true}
                 value={this.state.protein}
                 onChange={this.makeTextFieldHandler('protein')}
                 />
            </Row>
            <Row center="xs">
              <TextField 
              type="number"
                hintText="Fat in grams"
                fullWidth={true}
                value={this.state.fat}
                onChange={this.makeTextFieldHandler('fat')}
               />
            </Row>
            <Row center="xs">
              <TextField 
              type="number"
                hintText="Carbohydrates in grams" 
                fullWidth={true}
                value={this.state.carbohydrates}
                onChange={this.makeTextFieldHandler('carbohydrates')}
               />
            </Row>
            <Row center="xs">
              <TextField 
                floatingLabelText="Photo url"
                hintText="http://"
                fullWidth={true} 
                value={this.state.url}
                onChange={this.makeTextFieldHandler('url')}
              />
            </Row>
            <div className="AddProduct__select-field-container">
              <Row center="xs">
                  <SelectField
                    // multiple={true}
                    hintText="Choose category"
                    value={this.state.category}
                    onChange={this.handleChange}
                    fullWidth={true}
                  >
                    {categories.map(category => (
                      <MenuItem
                        key={category}
                        insetChildren={true}
                        value={category}
                        primaryText={category}
                        styles={style.button}
                      />
                    ))}
                  </SelectField>
              </Row>
            </div>
            <Row center="xs">
              <RaisedButton
                label="Save"
                primary={true}
                fullWidth={true}
                style={style.button}
                onClick={this.handleClick}
              />
            </Row>
          </div>
        </Grid>
      </Paper>
    );
  }
}
export default AddProduct;
