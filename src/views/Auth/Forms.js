import React from 'react'
import Button from '../Elements/Buttons'
import Input from '../Elements/Input'

import icon from '../../img/search.svg'

const style = {
    buttonLogin: {
        width: '226px',
        margin: 10
    },
}

const Forms = (props) => (
    <div>
        <div>
            <Input
                floatingLabelText='Email'
                onChange={props.valueLoginInput}
                value={props.labelLoginInput}
            />
        </div>
        <div>
            <Input
                floatingLabelText='Password'
                type='Password'
                onChange={props.valuePasswordInput}
                value={props.labelPasswordInput}
            />
        </div>
        <div>
            <Button
                label='Login'
                onClick={props.onClickLoginButton}
                style={style.buttonLogin}
            />
        </div>
        <div>
            <Button
                label='Forgot password'
                onClick={props.onClickForgotButton}
                style={style.buttonLogin}
            />
        </div>
        <div>
            <Button
                label='Login by Google'
                backgroundColor={'white'}
                labelColor={'#212121'}
                onClick={props.onClickLoginByGoogleButton}
                style={style.buttonLogin}
                icon={
                    <img
                        alt='google login icon'
                        src={icon}
                        style={{
                            maxHeight: '100%',
                            maxWidth: '10%'
                        }}
                    />
                }
            />

        </div>
    </div>
)
export default Forms