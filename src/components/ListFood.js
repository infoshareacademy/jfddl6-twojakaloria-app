import React from 'react'
import Paper from 'material-ui/Paper'
import { ListItem } from 'material-ui/List'
import IconButton from 'material-ui/IconButton'
import IconAdd from 'material-ui/svg-icons/content/add'

import { connect } from 'react-redux'
import { 
    addProductToBreakfast,
    addProductToDinner,
    addProductToSupper
 } from '../state/usersFoodPlan'


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
                            key={product.key}
                            rightIconButton={
                                <IconButton
                                    onClick={() => props._addProductToBreakfast(product.key, 'breakfast')}
                                >
                                    <IconAdd />
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
    _addProductToBreakfast: (key, meal) => dispatch(addProductToBreakfast(key, meal)),
    _addProductToDinner: (key, meal) => dispatch(addProductToDinner(key, meal)),
    _addProductToSupper: (key, meal) => dispatch(addProductToSupper(key, meal))
})

export default connect(
    mapStateToProps,
    dispatchPropsToState
)(ListFood)