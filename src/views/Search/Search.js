import React from 'react'
import TaskField from '../Input/Input'
import ItemSearch from './SearchMethod'
import Paper from 'material-ui/Paper'

const style = {
    paper: {
        margin: 12,
        padding: 30
    }
}

class Search extends React.Component {
    state = {
        text: ''
    }
    render() {
        return (
            <Paper style={style.paper}>
                <TaskField
                    hintText='Search'
                    value={this.state.text}
                    onChange={(event) => this.setState({ text: event.target.value })}
                />
                <ItemSearch
                    name={this.state.text}
                />
            </Paper>
        )
    }
}
export default Search