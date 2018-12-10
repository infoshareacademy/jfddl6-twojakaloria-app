export { database } from '../firebase'


const SET_DATA = 'usersLog/SET_DATA'


const INITIAL_STATE = {
    users: []
}



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