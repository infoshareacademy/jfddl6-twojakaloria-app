import React from 'react'
import TaskField from '../Elements/Input'
import ItemSearch from './SearchTaskForName'
import Paper from 'material-ui/Paper'
import Slider from '../Elements/Slider'

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
        category: ''
    }

    handleSlider = (event, value) => {
        this.setState({ slider: value });
    }



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
                <TaskField
                    hintText='Category'
                    value={this.state.category}
                    fullWidth={true}
                    onChange={(event) => this.setState({ category: event.target.value })}
                />
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