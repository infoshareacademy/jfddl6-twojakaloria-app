import React from 'react'
import { ListItem } from 'material-ui/List'
import ActionFavorite from 'material-ui/svg-icons/action/favorite';
import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border';
import IconButton from 'material-ui/IconButton'
import DeleteIcon from 'material-ui/svg-icons/action/delete'
import Paper from 'material-ui/Paper'

const styles = {
    paper: {
        margin: 20,
        padding: 30
    }
}
const API_URL = 'https://twoja-kaloria.firebaseio.com/products'

class FavoriteList extends React.Component {
    state = {
        tasks: []
    }
    componentWillMount = () => {
        this.loadData()
    }
    loadData = () => {
        fetch(`${API_URL}.json`)
            .then(response => response.json())
            .then(data => {
                if (!data) {
                    this.setState({ tasks: [] })
                    return;
                }
                const array = Object.entries(data)
                const tasksList = array.map(([id, values]) => {
                    values.id = id
                    return values
                })
                this.setState({ tasks: tasksList })
                console.log(this.state.tasks)
            })
    }
    isFavorite = (product) =>{
        fetch(`${API_URL}/${product.id}.json`,{
            method: 'PATCH',
            body: JSON.stringify({isFavorite: !tasks.isFavorite})
        }).then(()=>this.loadData())
    }
    render() {
        return (
            <Paper style={styles.paper}>
                {
                    this.state.tasks.filter((product) => product.isFavorite)
                        .map((product) => (
                            <ListItem
                                key={product.name}
                                primaryText={product.name}
                                rightIconButton={
                                    <div>
                                        <IconButton>
                                            <DeleteIcon
                                            // onClick={() => props.deleteTask(props.task.key)}
                                            />
                                        </IconButton>
                                        <IconButton onClick={()=>this.isFavorite()}>
                                            {product.isFavorite === true ?
                                                <ActionFavorite />
                                                :
                                                <ActionFavoriteBorder />
                                            }
                                        </IconButton>
                                    </div>
                                }
                            />
                        )
                        )
                }
            </Paper>
        )
    }
}

export default FavoriteList