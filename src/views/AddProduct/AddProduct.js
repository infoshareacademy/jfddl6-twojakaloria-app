import React from "react";
import TextField from "material-ui/TextField";
import SelectField from "material-ui/SelectField";
import MenuItem from "material-ui/MenuItem";

const categories = ["Vegetables", "Fruits", "Drinks", "Meat", "Other"];

class AddProduct extends React.Component {
  state = {
      values: []
  }

  handleChange = (event, index, values) => this.setState({categories})

  menuItems(values) {
      return categories.map((category) => (
          <MenuItem
            key={category}
            insetChildren={true}
            checked={values && values.indexOf(category) > -1}
            value={category}
            primaryText={category}
          />
      ))
  }
  render() {
      const {values} = this.state
    return (
      <div>
        <h1>Add product</h1>
        <div>
          <TextField
             hintText="Product name"
         />
        </div>
        <div>
            <SelectField
                multiple={true}
                hintText="Choose category"
                value={values}
                onChange={this.handleChange}
            >
            {this.menuItems(values)}
            </SelectField>
        </div>
      </div>
    );
  }
}

export default AddProduct;
