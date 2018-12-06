import { database } from '../firebase'

const LOAD_DATA = 'listFood/LOAD_DATA'

const INITIAL_STATE = {
    products: []
}

export const loadProductsFromDbAsyncAction = () => (dispatch, getState) => {

    const products = getState().products

    database.ref(`/products`).on(
        'value',
        snapshot => snapshot.val()
    )
}



export default (state = INITIAL_STATE, action) => {

    switch (action.type) {

        case LOAD_DATA: 
            return {
                ...state,
                products: action.products
            }

        default: 
            return state
    }


}