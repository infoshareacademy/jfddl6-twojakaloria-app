import React from "react";
import TextField from "material-ui/TextField";
import SelectField from "material-ui/SelectField";
import MenuItem from "material-ui/MenuItem";
import Paper from "material-ui/Paper";
import { Grid, Row, Col } from "react-flexbox-grid";

const categories = ["Vegetables", "Fruits", "Drinks", "Meat", "Other"];

class AddProduct extends React.Component {
  state = {
    value: null
  };

  handleChange = (event, index, value) => this.setState({ value: value });

  render() {
    return (
      <div>
        <Grid fluid>
          <Row center="xs">
            <Col lg={12} />
            <h1>Add product</h1>
          </Row>
          <div>
          <Paper>
              <div>
              <Row>
                <Col lg={12} />
                <TextField
                    hintText="Product name"
                 />
              </Row>
                    </div>
              <Row center="xs">
                <Col lg={12} />
                <TextField hintText="Product name" />
              </Row>
              <Row center="xs">
                <Col lg={12} />
                <TextField hintText="Product name" />
              </Row>
              <Row center="xs">
                <Col lg={12} />
                <TextField hintText="Product name" />
              </Row>
              <Row center="xs">
                <Col lg={12} />
                <TextField hintText="Product name" />
              </Row>
              <Row center="xs">
                <Col lg={12} />
                <SelectField
                  // multiple={true}
                  hintText="Choose category"
                  value={this.state.value}
                  onChange={this.handleChange}
                >
                  {categories.map(category => (
                    <MenuItem
                      key={category}
                      insetChildren={true}
                      value={category}
                      primaryText={category}
                    />
                  ))}
                </SelectField>
              </Row>
          </Paper>
            </div>
        </Grid>
      </div>
    );
  }
}

export default AddProduct;
