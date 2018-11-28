import React from 'react'
import TaskField from '../Elements/Input'
import ItemSearch from './SearchTask'
import Paper from 'material-ui/Paper'
import Slider from '../Elements/Slider'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem';

const style = {
    paper: {
        margin: 12,
        padding: 30
    }
}

class Search extends React.Component {
    state = {
        text: '',
        slider: -1,
        sliderText: 'All',
        category: '',
        value: ''
    }

    handleSlider = (event, value) => {
        this.setState({ slider: value });
    }
    handleChange = (event, index, value) => this.setState({ category: value });

    render() {
        const handleText = (
            this.state.slider === -1 ?
                this.state.sliderText
                :
                this.state.slider
        )

        return (
            <Paper style={style.paper}>
                <TaskField
                    hintText='Search Product'
                    value={this.state.text}
                    fullWidth={true}
                    onChange={(event) => this.setState({ text: event.target.value })}
                />
                <Slider
                    min={0}
                    max={1000}
                    step={1}
                    value={this.state.slider}
                    onChange={this.handleSlider}
                />
                <p>
                    <span>
                        {handleText}
                    </span>
                </p>
                <SelectField
                    value={this.state.category}
                    onChange={this.handleChange}
                >
                    <MenuItem
                        key={"Vegetables"}
                        value={"Vegetables"}
                        primaryText={"Vegetables"}
                    />
                    <MenuItem
                        key={"Fruits"}
                        value={"Fruits"}
                        primaryText={"Fruits"}
                    />
                    <MenuItem
                        key={"Drinks"}
                        value={"Drinks"}
                        primaryText={"Drinks"}
                    />
                    <MenuItem
                        key={"Meat"}
                        value={"Meat"}
                        primaryText={"Meat"}
                    />
                    <MenuItem
                        key={"Other"}
                        value={"Other"}
                        primaryText={"Other"}
                    />
                </SelectField>
                <ItemSearch
                    name={this.state.text}
                    kcal={this.state.slider}
                    category={this.state.category}
                />
            </Paper>
        )
    }
}
export default Search