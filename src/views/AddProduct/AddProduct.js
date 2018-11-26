import React from "react";
import TextField from "material-ui/TextField";
import SelectField from "material-ui/SelectField";
import MenuItem from "material-ui/MenuItem";
import Paper from "material-ui/Paper";
import RaisedButton from "material-ui/RaisedButton";
import { Grid, Row, Col } from "react-flexbox-grid";

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
    value: null
  };

  handleChange = (event, index, value) => this.setState({ value: value });

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
                <TextField hintText="Product name" fullWidth={true} />
              </Row>
            </div>
            <Row center="xs">
              <TextField hintText="Kcal" fullWidth={true} />
            </Row>
            <Row center="xs">
              <TextField hintText="Protein" fullWidth={true} />
            </Row>
            <Row center="xs">
              <TextField hintText="Fat" fullWidth={true} />
            </Row>
            <Row center="xs">
              <TextField hintText="Carbohydrates" fullWidth={true} />
            </Row>
            <Row center="xs">
              <TextField hintText="Photo url" fullWidth={true} />
            </Row>
            <div className="AddProduct__select-field-container">
              <Row center="xs">
                  <SelectField
                    // multiple={true}
                    hintText="Choose category"
                    value={this.state.value}
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
