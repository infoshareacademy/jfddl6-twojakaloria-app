import React from 'react'
import Paper from 'material-ui/Paper'
import Input from '../Elements/Input'
import Button from '../Elements/Buttons'
import { connect } from 'react-redux'
import { emailChangeAction, passwordChangeAction, repeatPasswordChangeAction, singUpAsyncAction } from '../../state/register';

const style = {
    paper: {
        margin: 30,
        padding: 30,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    button: {
        width: '226px',
        margin: 10
    },
}

const Register = (props) => (
    <div>
        <Paper
            style={style.paper}>
            <Input
                floatingLabelText='Email'
                onChange={props._emailChangeAction}
                value={props._email}
            />
            <Input
                floatingLabelText='Password'
                onChange={props._passwordChangeAction}
                type='Password'
                value={props._password}
            />
            <Input
                floatingLabelText='Repeat Password'
                onChange={props._repeatPasswordChangeAction}
                type='Password'
                value={props._repeatPassword}
            />
            <Button
                label='Sign up'
                style={style.button}
                primary={true}
                onClick={props._singUpAsyncAction}
            />
        </Paper>
    </div>
)
const mapStateToProps = state => ({
    _email: state.register.email,
    _password: state.register.password,
    _repeatPassword: state.register.repeatPassword
})
const mapDispatchToProps = dispatch => ({
    _emailChangeAction: (event) => dispatch(emailChangeAction(event.target.value)),
    _passwordChangeAction: (event) => dispatch(passwordChangeAction(event.target.value)),
    _repeatPasswordChangeAction: (event) => dispatch(repeatPasswordChangeAction(event.target.value)),
    _singUpAsyncAction: () => dispatch(singUpAsyncAction())

})
export default connect(mapStateToProps, mapDispatchToProps)(Register)
