import { database } from '../firebase'

const SET_DATA = 'listFood/SET_DATA'

const INITIAL_STATE = {
    products: []
}

export const startSyncingProductsFromDbAsyncAction = () => (dispatch, getState) => {
    database.ref(`/products`).on(
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

const setDataAction = data => ({
    type: SET_DATA,
    data
})

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SET_DATA:
            return {
                ...state,
                products: action.data
            }
        default:
            return state
    }
}