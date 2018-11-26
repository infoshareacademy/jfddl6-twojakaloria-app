import React from 'react'
import data from '../ProductList/Product'
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
const FavoriteList = () => (
    <Paper style={styles.paper}>
        {data
            .filter((product) => product.favorites)
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
                            <IconButton>
                                {product.favorites === true ?
                                    <ActionFavorite
                                        onClick={() => { }}
                                    />
                                    :
                                    <ActionFavoriteBorder
                                        onClick={() => { }} />}
                            </IconButton>
                        </div>
                    }
                />
            )
            )
        }
    </Paper>
)

export default FavoriteList