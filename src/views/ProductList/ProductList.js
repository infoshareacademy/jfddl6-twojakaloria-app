import React from 'react'
import { ListItem } from 'material-ui/List'
import ActionFavorite from 'material-ui/svg-icons/action/favorite';
import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border';
import IconButton from 'material-ui/IconButton'
import Paper from 'material-ui/Paper'
import { Link } from 'react-router-dom'

const styles = {
    paper: {
        margin: 20,
        padding: 30
    }
}
const API_URL = 'https://twoja-kaloria.firebaseio.com/'
class ProductList extends React.Component {
    state = {
        tasks: []
    }
    componentWillMount = () => {
        this.loadData()
    }
    loadData = () => {
        fetch(`${API_URL}/products.json`)
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
    isFavorite = (product) => {
        fetch(`${API_URL}products/${product.id}.json`, {
            method: 'PATCH',
            body: JSON.stringify({ isFavorite: !product.isFavorite })
        }).then(() => this.loadData())
    }
    deleteTask = (task) => {
        fetch(`${API_URL}products/${task.id}.json`, {
            method: 'DELETE'
        }).then(() => this.loadData())
    }

    addFoodToList = product => {
        fetch(`${API_URL}users/sniadanie/${product.id}.json`, {
            method: 'PUT',
            body: JSON.stringify({ product })
        })
    }

    render() {
        return (
            <Paper style={styles.paper}>
                {this.state.tasks.map((product) => (
                    <Link
                        to={`/product/${product.id}`}
                        style={{ textDecoration: 'none' }}
                        key={product.name}
                    >
                        <ListItem
                            primaryText={product.name}
                            rightIconButton={
                                <IconButton
                                    onClick={(event) => {
                                        event.preventDefault()
                                        this.isFavorite(product)
                                    }
                                    }
                                >
                                    {product.isFavorite === true ?
                                        <ActionFavorite />
                                        :
                                        <ActionFavoriteBorder />
                                    }
                                </IconButton>
                            }
                        />
                    </Link>
                )
                )
                }
            </Paper>
        )
    }
}
export default ProductList