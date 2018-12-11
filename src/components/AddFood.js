import React from 'react'
import Paper from 'material-ui/Paper'
import { ListItem } from 'material-ui/List'
import { Link } from 'react-router-dom'
import RaisedButton from 'material-ui/RaisedButton';

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
        const chosenInBreakfast = Object.keys((this.props._meals && this.props._meals.breakfast) || {})
        const breakfastMeals = this.props._products.filter(
            product => chosenInBreakfast.includes(product.key)
        )
        console.log(breakfastMeals)
        console.log(chosenInBreakfast)
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
                   
                   
                    <h2>Breakfast</h2>
                    {
                        breakfastMeals &&
                        breakfastMeals.map &&
                        breakfastMeals.map(meal => (
                            <div>{meal.name}</div>
                        ))
                    }
                    
                    <div
                        style={style.addButton}
                    >

                        <Link to="/breakfast/addfoodlist">
                            <RaisedButton
                                label="Add product!"
                                primary={true}
                            />
                        </Link>
                    </div>
                </Paper>
                <Paper
                    style={style.paperList}
                    zDepth={2}
                >
                    <h2>Dinner</h2>
                    
                    <div
                        style={style.addButton}
                    >
                        <Link to="/dinner/addfoodlist">
                            <RaisedButton
                                label="Add product!"
                                primary={true}
                            />
                        </Link>
                    </div>
                </Paper>
                <Paper
                    style={style.paperList}
                    zDepth={2}
                >
                    <h2>Supper</h2>
                    
                    <div
                        style={style.addButton}
                    >
                        <Link to="/supper/addfoodlist">
                            <RaisedButton
                                label="Add product!"
                                primary={true}
                            />
                        </Link>
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

export default connect(
    state => ({
        _meals: state.usersFoodPlan.meals,
        _products: state.listFood.products,
    })
)(AddFood)