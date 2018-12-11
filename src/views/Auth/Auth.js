import React from 'react'
import Paper from 'material-ui/Paper'
import Forms from './Forms'
import { connect } from 'react-redux'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import {
    onClickLoginByGoogle,
    initAuthChangeAsyncAction,
    logOutAsyncAction,
    emailOnChange,
    passwordOnChange,
    logInAsyncAction,
    remindPassword
} from '../../state/auth'
import Register from '../Register'

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

    componentWillMount() {
        this.props._initAuthChangeAsyncAction()
    }

    render() {
        return (this.props._isLoggedUser ?
            <div>
                {this.props.children}
            </div>
            :
            <div>
                <Paper
                    style={style.paper}
                >
                    <h2>Log in!</h2>
                    <Forms
                        labelStyle={style.label}
                        onClickLoginButton={this.props._logInAsyncAction}
                        onClickLoginByGoogleButton={this.props._onClickLoginByGoogle}
                        onClickForgotButton={this.props._remindPassword}
                        valueLoginInput={this.props._emailOnChange}
                        valuePasswordInput={this.props._passwordOnChange}
                        labelLoginInput={this.props._email}
                        labelPasswordInput={this.props._password}

                    />
                    <h4>A message with a restarted password will be sent to the Email provided in the Email field</h4>
                </Paper>

                <Register />

            </div>
        )
    }
}

const mapStateToProps = state => ({
    _isLoggedUser: state.auth.isLoggedUser,
    _email: state.auth.email,
    _password: state.auth.password
})

const mapDispatchToProps = dispatch => ({
    _onClickLoginByGoogle: () => dispatch(onClickLoginByGoogle()),
    _logInAsyncAction: () => dispatch(logInAsyncAction()),
    _logOutAsyncAction: () => dispatch(logOutAsyncAction()),
    _initAuthChangeAsyncAction: () => dispatch(initAuthChangeAsyncAction()),
    _emailOnChange: (event) => dispatch(emailOnChange(event.target.value)),
    _passwordOnChange: (event) => dispatch(passwordOnChange(event.target.value)),
    _remindPassword: () => dispatch(remindPassword())
})

export default connect(mapStateToProps, mapDispatchToProps)(Auth)