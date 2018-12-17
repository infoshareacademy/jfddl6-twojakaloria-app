import { database } from '../firebase'

const SET_DATA = 'usersLog/SET_DATA'

const INITIAL_STATE = {
    logs: []
}

export const startSyncingUsersFromDbAsyncAction = () => (dispatch, getState) => {

    database.ref(`loginLogs`).on(
        'value',
        snapshot => {
            if (snapshot.val()) {

                const array = Object.values(snapshot.val())
                const logs = array.map(log => log.timestamp)
                dispatch(setDataAction(logs))
            } else {
                dispatch(setDataAction(null))
            }
        }
    )
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
                logs: action.data
            }
        default:
            return state
    }
}