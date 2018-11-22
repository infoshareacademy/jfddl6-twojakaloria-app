import React from 'react'
import TaskField from 'material-ui/TextField'
import SearchMethod from './SearchMethod'

class Search extends React.Component {
    state = {
        text: ''
    }
    render() {
        return (
            <div>
                <TaskField
                    hintText='Search'
                    value={this.state.text}
                    onChange={(event) => this.setState({text: event.target.value})}
                />
                <SearchMethod name={this.state.text} />
            </div>
        )
    }
}
export default Search