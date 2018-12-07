import { auth, googleProvider, database } from '../firebase'
import React from 'react'

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

export const logInAsyncAction = () => (dispatch, getState) => {
    const { auth: { email, password } } = getState()
    auth.signInWithEmailAndPassword(email, password)
        .catch(error => {
            alert(`Email or password is incorrect. If you are not registered, do it!`)
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