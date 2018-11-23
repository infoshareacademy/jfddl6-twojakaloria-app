import React from "react";
import TextField from "material-ui/TextField";
import SelectField from "material-ui/SelectField";
import MenuItem from "material-ui/MenuItem";
import Paper from "material-ui/Paper";
import { Grid, Row, Col } from "react-flexbox-grid";

const categories = ["Vegetables", "Fruits", "Drinks", "Meat", "Other"];

const style = {
  paper: {
    margin: 12,
    padding: 50
  }
}

class AddProduct extends React.Component {
  state = {
    value: null
  };

  handleChange = (event, index, value) => this.setState({ value: value });

  render() {
    return (
      <Paper
        style={style.paper}
      >
        <Grid fluid>
          <Row center="xs">
            <Col lg={12} />
            <h1>Add product</h1>
          </Row>
          <div>
              <div>
              <Row center="xs">
                <Col lg={12} />
                <TextField
                    hintText="Product name"
                    fullWidth={true}
                 />
              </Row>
                    </div>
              <Row center="xs">
                <Col lg={12} />
                <TextField
                    hintText="Kcal"
                    fullWidth={true} 
                />
              </Row>
              <Row center="xs">
                <Col lg={12} />
                <TextField
                    hintText="Protein"
                    fullWidth={true} 
                />
              </Row>
              <Row center="xs">
                <Col lg={12} />
                <TextField
                    hintText="Fat"
                    fullWidth={true} 
                />
              </Row>
              <Row center="xs">
                <Col lg={12} />
                <TextField
                    hintText="Carbohydrates"
                    fullWidth={true} 
                />
              </Row>
              <Row center="xs">
                <Col lg={12} />
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
                    />
                  ))}
                </SelectField>
              </Row>
            </div>
        </Grid>
      </Paper>
    );
  }
}

export default AddProduct;
