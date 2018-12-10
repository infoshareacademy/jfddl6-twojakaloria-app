import React from 'react'
import Paper from 'material-ui/Paper'
import { ListItem } from 'material-ui/List'
import IconButton from 'material-ui/IconButton'
import IconCircle from 'material-ui/svg-icons/action/check-circle'

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

    componentDidMount() {
        console.log(this.props._products)
        this.props._startSyncingProductsFromDbAsyncAction()
    }

    componentWillUnmount() {
        this.props._stopSyncingProductsFromDbAsyncAction()
    }


    render() {
        return (
            <Paper
                style={style.paper}
            >
                <div>

                    <h1>Choose food</h1>
                    <div>
                        {this.props._products &&
                            this.props._products.map ?
                            this.props._products.map(product => (
                                <ListItem
                                    rightIconButton={
                                        <IconButton
                                        onClick={() => alert('Dodano')}
                                        >

                                            <IconCircle/>
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