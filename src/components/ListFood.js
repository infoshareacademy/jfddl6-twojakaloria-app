import React from 'react'
import Paper from 'material-ui/Paper'
import { ListItem } from 'material-ui/List'
import IconButton from 'material-ui/IconButton'
import IconCircle from 'material-ui/svg-icons/action/check-circle'

import { connect } from 'react-redux'
import {
    startSyncingProductsFromDbAsyncAction,
    stopSyncingProductsFromDbAsyncAction,
    addProductToBreakFast
} from '../state/listFood'



const style = {
    paper: {
        margin: 30,
        padding: 30
    }
}

const ListFood = (props) => (

    <Paper
        style={style.paper}
    >
        <div>

            <h1>Choose food</h1>
            <div>
                {props._products &&
                    props._products.map ?
                    props._products.map(product => (
                        <ListItem
                            rightIconButton={
                                <IconButton
                                    onClick={props._addProductToBreakFast}
                                >

                                    <IconCircle />
                                </IconButton>

                            }
                        >
                            {product.name}
                        </ListItem>
                    ))
                    :
                    'Error!'
                }
            </div>
        </div>
    </Paper>


)






const mapStateToProps = state => ({
    _products: state.listFood.products
})

const dispatchPropsToState = dispatch => ({

    _addProductToBreakFast: (data) => dispatch(addProductToBreakFast(data))
})


export default connect(
    mapStateToProps,
    dispatchPropsToState
)(ListFood)