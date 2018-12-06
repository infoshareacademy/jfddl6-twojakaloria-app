import React from 'react'
import Paper from 'material-ui/Paper'
import { ListItem } from 'material-ui/List'
import ActionFavorite from 'material-ui/svg-icons/action/favorite';
import RaisedButton from 'material-ui/RaisedButton';
import IconButton from 'material-ui/IconButton'
import DeleteIcon from 'material-ui/svg-icons/action/delete'
import DetailsIcon from 'material-ui/svg-icons/action/assignment'

import { connect } from 'react-redux'

const style = {
    paper: {
        margin: 30,
        padding: 30
    },
    paperList: {
        padding: 15,
        marginTop: 10
    },
    header: {
        margin: '0 auto',
        textAlign: 'center'
    },
    addButton: {
        display: 'flex',
        justifyContent: 'flex-end'
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

                <Paper
                    style={style.paperList}
                    zDepth={2}
                >
                    <h2>Śniadanie</h2>
                    <ListItem
                        key="Produkt"
                        primaryText="Produkt"
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
                    <div
                        style={style.addButton}
                    >
                        <RaisedButton
                            label="Add product!"
                            primary={true}
                            href="/addfoodlist"
                        />
                    </div>
                </Paper>
                <Paper
                    style={style.paperList}
                    zDepth={2}
                >
                    <h2>Śniadanie</h2>
                    <ListItem
                        key="Produkt"
                        primaryText="Produkt"
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
                    <div
                        style={style.addButton}
                    >
                        <RaisedButton
                            label="Add product!"
                            primary={true}
                            href="/addfoodlist"
                        />
                    </div>
                </Paper>
                <Paper
                    style={style.paperList}
                    zDepth={2}
                >
                    <h2>Śniadanie</h2>
                    <ListItem
                        key="Produkt"
                        primaryText="Produkt"
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
                    <div
                        style={style.addButton}
                    >
                        <RaisedButton
                            label="Add product!"
                            primary={true}
                            href="/addfoodlist"
                        />
                    </div>
                </Paper>
                <Paper
                    style={style.paperList}
                    zDepth={2}
                >
                    <div>
                        Wykresy
                    </div>
                </Paper>
            </Paper>
        )
    }
}

export default connect()(AddFood)