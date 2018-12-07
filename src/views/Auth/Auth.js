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
    logInAsyncAction
} from '../../state/auth'

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
                <FloatingActionButton
                    style={{
                        position: 'fixed',
                        top: 10,
                        right: 10,
                        zIndex: 9999,
                        color: 'white'
                    }}
                    secondary={true}
                    onClick={this.props._logOutAsyncAction}
                >
                    X
              </FloatingActionButton>
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
                        onClickSingInButton={() => { }}
                        onClickLoginByGoogleButton={this.props._onClickLoginByGoogle}
                        valueLoginInput={this.props._emailOnChange}
                        valuePasswordInput={this.props._passwordOnChange}
                    />
                </Paper>
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
    _passwordOnChange: (event) => dispatch(passwordOnChange(event.target.value))
})

export default connect(mapStateToProps, mapDispatchToProps)(Auth)