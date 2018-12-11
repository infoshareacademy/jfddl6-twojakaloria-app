import { database } from '../firebase'


const SET_DATA = 'usersLog/SET_DATA'


const INITIAL_STATE = {
    users: []
}

export const startSyncingUsersFromDbAsyncAction = () => (dispatch, getState) => {

    database.ref(`loginLogs`).on(
        'value',
        snapshot => {
            if (snapshot.val()) {

                const array = Object.entries(snapshot.val())
                const userLog = array.map(entry => ({
                    timestamp: entry[1],
                    key: entry[0]
                }))
                dispatch(setDataAction(userLog))
                console.log(array)
                console.log(userLog)
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
                users: action.data
            }
        default:
            return state
    }
}