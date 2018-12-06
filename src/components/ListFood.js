import React from 'react'
import Paper from 'material-ui/Paper'

import { connect } from 'react-redux'
import { loadProductsFromDbAsyncAction } from '../state/listFood'



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
            <ul>
                {console.log(props._loadProductsFromDbAsyncAction())}
            </ul>
        </div>
    </Paper>
)

const mapStateToProps = state => ({
    _products: state.listFood.products
})

const dispatchPropsToState = dispatch => ({
    _loadProductsFromDbAsyncAction: () =>
        dispatch(loadProductsFromDbAsyncAction)
})


export default connect(
    mapStateToProps,
    dispatchPropsToState
)(ListFood)