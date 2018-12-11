import { database } from '../firebase'

const SET_DATA = 'usersFoodPlan/SET_DATA'

const INITIAL_STATE = {
    meals: []
}

export const startSyncingUsersMealsFromDbAsyncAction = () => (dispatch, getState) => {
    const uuid = getState().auth.user.uid

    database.ref(`/users/${uuid}/meals`).on(
        'value',
        snapshot => {
            dispatch(setDataAction(snapshot.val()))
        }
    )
}

export const stopSyncingUsersMealsFromDbAsyncAction = () => (dispatch, getState) => {
    const uuid = getState().auth.user.uid

    database.ref(`/users/${uuid}/meals`).off()
}

export const addProductToBreakfast = (key, meal) => (dispatch, getState) => {
    const uuid = getState().auth.user.uid

    database.ref(`/users/${uuid}/meals/${meal}/${key}`).set(true)
}

export const addProductToDinner = (key, meal) => (dispatch, getState) => {
    const uuid = getState().auth.user.uid

    database.ref(`/users/${uuid}/meals/${meal}/${key}`).set(true)
}

export const addProductToSupper = (key, meal) => (dispatch, getState) => {
    const uuid = getState().auth.user.uid

    database.ref(`/users/${uuid}/meals/${meal}/${key}`).set(true)
}

export const deleteProductFromBreakfast = (key, meal) => (dispatch, getState) => {
    const uuid = getState().auth.user.uid

    database.ref(`/users/${uuid}/meals/${meal}/${key}`).set(null)
}

export const deleteProductFromDinner = (key, meal) => (dispatch, getState) => {
    const uuid = getState().auth.user.uid

    database.ref(`/users/${uuid}/meals/${meal}/${key}`).set(null)
}

export const deleteProductFromSupper = (key, meal) => (dispatch, getState) => {
    const uuid = getState().auth.user.uid

    database.ref(`/users/${uuid}/meals/${meal}/${key}`).set(null)
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
                meals: action.data
            }
        default:
            return state
    }
}