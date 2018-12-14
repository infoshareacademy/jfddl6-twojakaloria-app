import { auth, googleProvider, database } from '../firebase'
import { startSyncingUsersFromDbAsyncAction } from './usersLog'

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
            if (user) {
                dispatch(logInAction(user))
                dispatch(saveLogInTimestampAsyncAction())
                dispatch(startSyncingUsersFromDbAsyncAction())
            }else{
                dispatch(logOutAction())
            }
        }
    )
}

export const remindPassword = () => (dispatch, getState) => {
    const {auth: {email}} = getState()
    console.log(email)
    auth.sendPasswordResetEmail(email).then(function() {
        'Email send'
      }).catch(function(error) {
       'Email is incorrect'
      });
}

export const logInAsyncAction = () => (dispatch, getState) => {
    const { auth: { email, password } } = getState()
    auth.signInWithEmailAndPassword(email, password)
        .catch(error => {
            alert(`Email or password is incorrect. If you are not registered, do it!`)
        })
}

const saveLogInTimestampAsyncAction = () => (dispatch, getState) => {
    database.ref('loginLogs').push({
        timestamp: Date.now()
    })
}
export const logOutAsyncAction = () => (dispatch, getState) => {
    auth.signOut()
}

const logInAction = (user) => ({
    type: LOG_IN,
    user
})

const logOutAction = () => ({
    type: LOG_OUT
})

export const emailOnChange = (value) => ({
    type: EMAIL,
    value
})

export const passwordOnChange = (value) => ({
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
        case EMAIL:
            return {
                ...state,
                email: action.value
            }
        case PASSWORD:
            return {
                ...state,
                password: action.value
            }
        default:
            return state
    }
}