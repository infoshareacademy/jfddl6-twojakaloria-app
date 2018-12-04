import React from 'react'
import Paper from 'material-ui/Paper'
import { auth, googleProvider } from '../../firebase'
import Forms from './Form'
const style = {
    paper: {
        margin: 30,
        padding: 15,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    }
}
class Auth extends React.Component {
    render() {
        return (
            <div>
                <Paper
                style={style.paper}
                >
                    <h1>Log in!</h1>
                    <Forms
                    />
                </Paper>
            </div>
        )
    }
}
export default Auth