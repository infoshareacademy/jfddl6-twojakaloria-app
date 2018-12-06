import { auth, googleProvider, database } from '../firebase'

const LOG_IN = 'auth/LOG_IN'
const LOG_OUT = 'auth/LOG_OUT'
const EMAIL = 'auth/EMAIL'
const PASSWORD = 'auth/PASSWORD'

const INITIAL_STATE = {
    isLoggedUser: false,
    email: '',
    password: '',
    user: null
}

export const initAuthChangeAsyncAction = () => (dispatch, getState) => {
    auth.onAuthStateChanged(
        user => {
            (user) ?
                dispatch(logInAction())
                :
                dispatch(logOutAction())
        }
    )
}
export const logOutAsyncAction = () => (dispatch, getState) => {
    auth.signOut()
}

const logInAction = (user) => ({
    type: LOG_IN,
    user
})
const logOutAction = () => ({ type: LOG_OUT })

const emailOnChange = (value) => ({
    type: EMAIL,
    value
})
const passwordOnChange = (value) => ({
    type: PASSWORD,
    value
})

export const onClickLoginByGoogle = () => (dispatch, getState) => {
    auth.signInWithPopup(googleProvider)
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case LOG_IN:
            return {
                ...state,
                isLoggedUser: true
            }
        case LOG_OUT:
            return {
                ...state,
                isLoggedUser: false
            }
        default:
            return state
    }
}