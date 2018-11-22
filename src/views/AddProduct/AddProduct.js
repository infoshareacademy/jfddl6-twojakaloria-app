import React from "react";
import TextField from "material-ui/TextField";
import SelectField from "material-ui/SelectField";
import MenuItem from "material-ui/MenuItem";

const categories = ["Vegetables", "Fruits", "Drinks", "Meat", "Other"];

class AddProduct extends React.Component {
  state = {
    value: null
  };

  handleChange = (event, index, value) => this.setState({ value: value });

  menuItems(values) {
    return;
  }

  render() {
    return (
      <div>
        <h1>Add product</h1>
        <div>
          <TextField hintText="Product name" />
        </div>
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
      </div>
    );
  }
}

export default AddProduct;
