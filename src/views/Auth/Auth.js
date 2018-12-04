import React from 'react'
import Paper from 'material-ui/Paper'
import { auth, googleProvider } from '../../firebase'
import Forms from './Form'

class Auth extends React.Component {
    render() {
        return (
            <div>
                Logowanie!!!
                <Forms
                />
            </div>
        )
    }
}
export default Auth