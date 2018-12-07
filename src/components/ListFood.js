import React from 'react'
import Paper from 'material-ui/Paper'

import { connect } from 'react-redux'
import { startSyncingProductsFromDbAsyncAction, 
    stopSyncingProductsFromDbAsyncAction } from '../state/listFood'



const style = {
    paper: {
        margin: 30,
        padding: 30
    }
}

class ListFood extends React.Component {

    componentWillMount() {
        this.props._startSyncingProductsFromDbAsyncAction()
    }

    componentDidMount() {
        this.props._stopSyncingProductsFromDbAsyncAction()
    }


    render() {
        console.log(props._products)
        return (
            <Paper
                style={style.paper}
            >
                <div>

                    <h1>Choose food</h1>
                    <ul>

                    </ul>
                </div>
            </Paper>

        )
    }
}


const mapStateToProps = state => ({
    _products: state.listFood.products
})

const dispatchPropsToState = dispatch => ({
    _startSyncingProductsFromDbAsyncAction: () => dispatch(startSyncingProductsFromDbAsyncAction()),
    _stopSyncingProductsFromDbAsyncAction: () => dispatch(stopSyncingProductsFromDbAsyncAction())
})


export default connect(
    mapStateToProps,
    dispatchPropsToState
)(ListFood)