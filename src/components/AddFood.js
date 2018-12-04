import React from 'react'
import Paper from 'material-ui/Paper'
import { ListItem } from 'material-ui/List'
import ActionFavorite from 'material-ui/svg-icons/action/favorite';
import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border';
import IconButton from 'material-ui/IconButton'
import DeleteIcon from 'material-ui/svg-icons/action/delete'
import DetailsIcon from 'material-ui/svg-icons/action/assignment'

const style = {
    paper: {
        margin: 30,
        padding: 30
    },
    header: {
        margin: '0 auto',
        textAlign: 'center'
    }
}


class AddFood extends React.Component {

    render() {
        return (
            <Paper
                style={style.paper}
            >
                <h1
                    style={style.header}
                >Create your daily plan!</h1>

                <div>
                    <h2>Śniadanie</h2>
                    <ListItem
                            key="c"
                            primaryText="c"
                            rightIconButton={
                                <div>
                                    <IconButton>
                                        {/* <Link to={`/product/${product.id}`}> */}
                                            <DetailsIcon />
                                        {/* </Link> */}
                                    </IconButton>
                                    <IconButton>
                                        <DeleteIcon
                                            // onClick={(event) => {
                                            //     event.preventDefault()
                                            //     this.deleteTask(product)
                                            // }
                                            //}
                                        />
                                    </IconButton>
                                    <IconButton
                                        // onClick={(event) => {
                                        //     event.preventDefault()
                                        //     this.isFavorite(product)
                                        // }
                                        // }
                                    >
                                        {/* {product.isFavorite === true ? */}
                                            <ActionFavorite />
                                            {/* :
                                            <ActionFavoriteBorder />
                                        } */}
                                    </IconButton>
                                </div>
                            }
                        />
                    <button>Dodaj produkt</button>
                </div>
                <div>
                    <h2>Śniadanie</h2>
                    <ListItem
                            key="c"
                            primaryText="c"
                            rightIconButton={
                                <div>
                                    <IconButton>
                                        {/* <Link to={`/product/${product.id}`}> */}
                                            <DetailsIcon />
                                        {/* </Link> */}
                                    </IconButton>
                                    <IconButton>
                                        <DeleteIcon
                                            // onClick={(event) => {
                                            //     event.preventDefault()
                                            //     this.deleteTask(product)
                                            // }
                                            //}
                                        />
                                    </IconButton>
                                    <IconButton
                                        // onClick={(event) => {
                                        //     event.preventDefault()
                                        //     this.isFavorite(product)
                                        // }
                                        // }
                                    >
                                        {/* {product.isFavorite === true ? */}
                                            <ActionFavorite />
                                            {/* :
                                            <ActionFavoriteBorder />
                                        } */}
                                    </IconButton>
                                </div>
                            }
                        />
                    <button>Dodaj produkt</button>
                </div>
                <div>
                    <h2>Śniadanie</h2>
                    <ListItem
                            key="c"
                            primaryText="c"
                            rightIconButton={
                                <div>
                                    <IconButton>
                                        {/* <Link to={`/product/${product.id}`}> */}
                                            <DetailsIcon />
                                        {/* </Link> */}
                                    </IconButton>
                                    <IconButton>
                                        <DeleteIcon
                                            // onClick={(event) => {
                                            //     event.preventDefault()
                                            //     this.deleteTask(product)
                                            // }
                                            //}
                                        />
                                    </IconButton>
                                    <IconButton
                                        // onClick={(event) => {
                                        //     event.preventDefault()
                                        //     this.isFavorite(product)
                                        // }
                                        // }
                                    >
                                        {/* {product.isFavorite === true ? */}
                                            <ActionFavorite />
                                            {/* :
                                            <ActionFavoriteBorder />
                                        } */}
                                    </IconButton>
                                </div>
                            }
                        />
                    <button>Dodaj produkt</button>
                </div>
            </Paper>
        )
    }
}

export default AddFood