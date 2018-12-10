import { database } from '../firebase'

const SET_DATA = 'listFood/SET_DATA'
const SET_BREAKFAST = 'listFood/SET_BREAKFAST'

const INITIAL_STATE = {
    products: [],
    breakfastProducts: []
}

export const startSyncingProductsFromDbAsyncAction = () => (dispatch, getState) => {

    database.ref(`products`).on(
        'value',
        snapshot => {
            if (snapshot.val()) {

                const array = Object.entries(snapshot.val())
                const productList = array.map(entry => ({
                    ...entry[1],
                    key: entry[0]
                }))
                dispatch(setDataAction(productList))
            } else {
                dispatch(setDataAction(null))
            }
        }
    )
}

export const stopSyncingProductsFromDbAsyncAction = () => (dispatch, getState) => {
    database.ref(`/products`).off()
}

export const addProductToBreakFast = (data) => (dispatch, getState) => {

    const key = getState().listFood.products.map(product => (
        console.log(product.key)
    ))
    const uuid = getState().auth.user.uid
    database.ref(`users/${uuid}/products/breakfast/{${key}}`).push({
        dupa: 0
    })

    dispatch(setDataBreakfast(data))
}

const setDataAction = data => ({
    type: SET_DATA,
    data
})

const setDataBreakfast = data => ({
    type: SET_BREAKFAST,
    data
})

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {

        case SET_DATA:
            return {
                ...state,
                products: action.data
            }
        case SET_BREAKFAST:
            return {
                ...state,
                breakfastProducts: action.data
            }

        default:
            return state
    }


}