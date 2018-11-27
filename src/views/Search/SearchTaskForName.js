import React from 'react'
import { ListItem } from 'material-ui/List'
import ActionFavorite from 'material-ui/svg-icons/action/favorite';
import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border';
import IconButton from 'material-ui/IconButton'
import DeleteIcon from 'material-ui/svg-icons/action/delete'
import data from '../ProductList/Product'
import { unifyString } from './unify'

const SearchTask = (props) => (
    data
        .filter((product) => unifyString(product.name)
            .includes(
                unifyString(props.name)))
        .filter((product) => props.kcal!=-1? (product.kcal <= props.kcal):product)
        .filter((product) => (unifyString(product.category)
            .includes(
                unifyString(props.category))))
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
        ))
)

export default SearchTask