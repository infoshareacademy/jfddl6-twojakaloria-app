import React from "react";
import TextField from "material-ui/TextField";
import SelectField from "material-ui/SelectField";
import MenuItem from "material-ui/MenuItem";
import Paper from "material-ui/Paper";
import RaisedButton from "material-ui/RaisedButton";
import { Grid, Row } from "react-flexbox-grid";
import {database} from '../../firebase'

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

class AddProduct extends React.Component {
  state = {
    name: '',
    category: null,
    kcal: null,
    protein: null,
    fat: null,
    carbohydrates: null,
    url: ''
  };

  handleChange = (event, index, value) => this.setState({ category: value });

  nameHandler = (event) => this.setState({ name: event.target.value})
  kcalHandler = (event) => this.setState({kcal : event.target.value})
  proteinHandler = (event) => this.setState({protein : event.target.value})
  fatHandler = (event) => this.setState({fat : event.target.value})
  carboHandler = (event) => this.setState({carbohydrates : event.target.value})
  urlHandler = (event) => this.setState({url : event.target.value})

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
                  onChange={this.nameHandler}
                  />
              </Row>
            </div>
            <Row center="xs">
              <TextField
                 hintText="Kcal"
                 fullWidth={true}
                 value={this.state.kcal}
                 onChange={this.kcalHandler}
                 />
            </Row>
            <Row center="xs">
              <TextField
                 hintText="Protein"
                 fullWidth={true}
                 value={this.state.protein}
                 onChange={this.proteinHandler}
                 />
            </Row>
            <Row center="xs">
              <TextField 
                hintText="Fat"
                fullWidth={true}
                value={this.state.fat}
                onChange={this.fatHandler}
               />
            </Row>
            <Row center="xs">
              <TextField 
                hintText="Carbohydrates" 
                fullWidth={true}
                value={this.state.carbohydrates}
                onChange={this.carboHandler}
               />
            </Row>
            <Row center="xs">
              <TextField 
                hintText="Photo url" 
                fullWidth={true} 
                value={this.state.url}
                onChange={this.urlHandler}
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
              />
            </Row>
          </div>
        </Grid>
      </Paper>
    );
  }
}
export default AddProduct;
