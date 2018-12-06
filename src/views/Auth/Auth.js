import React from 'react'
import Paper from 'material-ui/Paper'
import { auth, googleProvider } from '../../firebase'
import Forms from './Forms'
const style = {
    paper: {
        margin: 30,
        padding: 15,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    input: {
        margin: 15
    }
}
class Auth extends React.Component {
    render() {
        return (
            <div>
                <Paper
                    style={style.paper}
                >
                    <h2>Log in!</h2>
                    <Forms
                        labelStyle={style.label}
                        onClickLoginButton={()=>{}}
                        onClickSingInButton={()=>{}}
                        onClickLoginByGoogleButton={()=>{}}
                        valueLoginInput={()=>{}}
                        valuePasswordInput={()=>{}}
                    />
                </Paper>
            </div>
        )
    }
}
export default Auth