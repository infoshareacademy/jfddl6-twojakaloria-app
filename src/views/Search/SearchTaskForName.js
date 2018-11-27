import React from 'react'
import { ListItem } from 'material-ui/List'
import ActionFavorite from 'material-ui/svg-icons/action/favorite';
import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border';
import IconButton from 'material-ui/IconButton'
import DeleteIcon from 'material-ui/svg-icons/action/delete'
import Checkbox from 'material-ui/Checkbox';


const API_URL = 'https://twoja-kaloria.firebaseio.com/products'
class Task extends React.Component {
    state = {
        tasks: []
    }
    componentWillMount = () =>{
        this.loadData()
    }
    loadData() {
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
            })
    }
    deleteHandler = (id) => {
        fetch(`${API_URL}/${id}.json`, {
            method: 'DELETE'
        }).then(() => this.loadData())
    }
    isFavourite = (task) => {
        fetch(`${API_URL}/${task.id}/.json`, {
            method: 'PATCH',
            body: JSON.stringify({ isFavourite: !task.isFavourite })
        }
        ).then(() => this.loadData())
    }
    render() {
        return (

            this.state.tasks.map((product) => (
                <ListItem
                    key={product.name}
                    primaryText={product.name}
                    rightIconButton={
                        <div>
                            <IconButton>
                                <DeleteIcon
                                    onClick={() => this.deleteHandler(product.id)}
                                />
                            </IconButton>
                            <IconButton
                                onClick={() => this.isFavourite(product)}
                            >
                                {product.isFavourite === true ?
                                    <ActionFavorite />
                                    :
                                    <ActionFavoriteBorder />
                                }
                            </IconButton>
                        </div>
                    }
                />
            ))

        )
    }
}

export default Task