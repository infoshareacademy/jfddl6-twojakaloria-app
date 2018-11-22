import React from "react";
import TextField from "material-ui/TextField";
import SelectField from "material-ui/SelectField";
import MenuItem from "material-ui/MenuItem";
import { Grid, Row, Col } from 'react-flexbox-grid';

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
                <Col lg={1}/>
                <h1>Add product</h1>
            </Row>
            <Row center="xs">
                    <Col lg={1}/>
                    <div>
                    <TextField hintText="Product name" />
                    </div>
                    <Col lg={1}/>
                    <div>
                    <TextField hintText="Kcal" />
                    </div>
                    <Col lg={1}/>
                    <div>
                    <TextField hintText="Protein" />
                    </div>
                    <Col lg={1}/>
                    <div>
                    <TextField hintText="Fat" />
                    </div>
                    <Col lg={1}/>
                    <div>
                    <TextField hintText="Carbohydrates" />
                    </div>
                    <Col lg={1}/>
                    <div>
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
                    </div>
            </Row>
            </Grid>
        </div>
    );
  }
}

export default AddProduct;
