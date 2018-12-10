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
                hintText='Email'
                onChange={props.valueLoginInput}
            />
        </div>
        <div>
            <Input
                hintText='Password'
                type='Password'
                onChange={props.valuePasswordInput}
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