import React from 'react'
import { ListItem } from 'material-ui/List'
import ActionFavorite from 'material-ui/svg-icons/action/favorite';
import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border';
import IconButton from 'material-ui/IconButton'
import DeleteIcon from 'material-ui/svg-icons/action/delete'
import DetailsIcon from 'material-ui/svg-icons/action/assignment'
import { unifyString } from './unify'

const API_URL = 'https://twoja-kaloria.firebaseio.com/products'

class Task extends React.Component {
    state = {
        tasks: []
    }
    componentWillMount = () => {
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
    isFavorite = (task) => {
        fetch(`${API_URL}/${task.id}/.json`, {
            method: 'PATCH',
            body: JSON.stringify({ isFavorite: !task.isFavorite })
        }
        ).then(() => this.loadData())
    }
    render() {
        return (
            this.state.tasks
                .filter((product) => unifyString(product.name)
                    .includes(
                        unifyString(this.props.name)))
                .filter((product) => this.props.kcal != -1 ? (product.kcal <= this.props.kcal) : product)
                .filter((product) => (unifyString(product.category)
                    .includes(
                        unifyString(this.props.category))))
                .map((product) => (
                    <ListItem
                        key={product.name}
                        primaryText={product.name}
                        rightIconButton={
                            <div>
                                <IconButton>
                                    <DetailsIcon
                                        onClick={() => { }} />
                                </IconButton>
                                <IconButton>
                                    <DeleteIcon
                                        onClick={() => this.deleteHandler(product.id)}
                                    />
                                </IconButton>
                                <IconButton
                                    onClick={() => this.isFavorite(product)}
                                >
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
        )
    }
}

export default Task