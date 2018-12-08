import { auth } from '../firebase'


const EMAIL = 'register/EMAIL'
const PASSWORD = 'register/PASSWORD'
const REPEAT_PASSWORD = 'register/REPEAT_PASSWORD'

const INITIAL_STATE = {
    email: '',
    password: '',
    repeatPassword: ''
}

export const singUpAsyncAction = () => (dispatch, getState) => {
    const { register: { email, password, repeatPassword } } = getState()

    ;(password === repeatPassword) ?
        auth.createUserWithEmailAndPassword(email, password)
            .catch(error => {
                alert(`Email or password is incorrect. If you are not registered, do it!`)
            })
        :
        alert('Password incorrect')
}

export const emailChangeAction = (value) => ({
    type: EMAIL,
    value
})

export const passwordChangeAction = value => ({
    type: PASSWORD,
    value
})

export const repeatPasswordChangeAction = value => ({
    type: REPEAT_PASSWORD,
    value
})


export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
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
        case REPEAT_PASSWORD:
            return {
                ...state,
                repeatPassword: action.value
            }
        default:
            return state
    }
}