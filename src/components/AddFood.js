import React from 'react'
import Paper from 'material-ui/Paper'
import { ListItem } from 'material-ui/List'
import { Link } from 'react-router-dom'
import RaisedButton from 'material-ui/RaisedButton'
import DeleteIcon from 'material-ui/svg-icons/action/delete'
import IconButton from 'material-ui/IconButton'

import { deleteProductFromBreakfast, deleteProductFromDinner } from '../state/usersFoodPlan'

import { connect } from 'react-redux'

const style = {
    paper: {
        margin: 30,
        padding: 30
    },
    header: {
        margin: '0 auto',
        textAlign: 'center'
    },
    addButton: {
        display: 'flex',
        justifyContent: 'flex-end',
        marginTop: '10px'
    }
}


class AddFood extends React.Component {

    render() {
        const chosenInBreakfast = Object.keys((this.props._meals && this.props._meals.breakfast) || {})
        const breakfastMeals = this.props._products.filter(
            product => chosenInBreakfast.includes(product.key)
        )

        const chosenInDinner = Object.keys((this.props._meals && this.props._meals.dinner) || {})
        const dinnerMeals = this.props._products.filter(
            product => chosenInDinner.includes(product.key)
        )

        const chosenInSupper = Object.keys((this.props._meals && this.props._meals.supper) || {})
        const supperMeals = this.props._products.filter(
            product => chosenInSupper.includes(product.key)
        )

        const mealsPlan = [
            {
                mealName: 'Breakfast',
                meals: breakfastMeals,
                mealKey: 'breakfast'
            },
            {
                mealName: 'Dinner',
                meals: dinnerMeals,
                mealKey: 'dinner'
            },
            {
                mealName: 'Supper',
                meals: supperMeals,
                mealKey: 'supper'
            }
        ]

        return (
            <div>
                <Paper
                    style={style.paper}
                >
                    <h1
                        style={style.header}
                    >Create your daily plan!</h1>
                </Paper>
                {
                    mealsPlan.map(plan => (
                        <Paper
                            style={style.paper}
                            zDepth={2}
                        >
                            <h2>{plan.mealName}</h2>
                            {
                                plan.meals &&
                                plan.meals.map &&
                                plan.meals.map(meal => (
                                    <div>

                                        <ListItem
                                            key={meal.key}
                                            rightIconButton={
                                                <IconButton
                                                    onClick={() => this.props._deleteProductFromBreakfast(meal.key, plan.mealKey)}
                                                >
                                                    <DeleteIcon />
                                                </IconButton>

                                            }
                                        >{meal.name}</ListItem>
                                    </div>
                                ))
                            }
                            <div
                                style={style.addButton}
                            >

                                <Link to={`/addfoodlist/${plan.mealKey}`}>
                                    <RaisedButton
                                        label="Add product!"
                                        primary={true}
                                    />
                                </Link>
                            </div>
                        </Paper>
                    ))
                }
                <Paper
                    style={style.paper}
                    zDepth={2}
                >
                    <div>
                        Wykresy
                    </div>
                </Paper>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    _deleteProductFromBreakfast: (key, meal) => dispatch(deleteProductFromBreakfast(key, meal)),
    _deleteProductFromDinner: (key, meal) => dispatch(deleteProductFromDinner(key, meal))
})

export default connect(
    state => ({
        _meals: state.usersFoodPlan.meals,
        _products: state.listFood.products,
    }),
    mapDispatchToProps
)(AddFood)