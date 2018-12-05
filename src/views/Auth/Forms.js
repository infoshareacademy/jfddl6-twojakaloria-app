import React from 'react'
import Button from '../Elements/Buttons'
import Input from '../Elements/Input'

import icon from '../../img/search.svg'

const style = {
    buttonLogin: {
        width: '103px',
        margin: 10
    },
    buttonLoginByGoogle: {
        width: '226px',
        margin: 10
    }
}

const Forms = (props) => (
    <div>
        <div>
            <Input
                hintText='Email'
            />
        </div>
        <div>
            <Input
                hintText='Password'
                type='Password'
            />
        </div>
        <div>
            <Button
                label='Login'
                onClick={props.onClickLoginButton}
                style={style.buttonLogin}
            />
            <Button
                label='Sign in'
                onClick={props.onClickSingInButton}
                style={style.buttonLogin}
            />
        </div>
        <div>
            <Button
                label='Login by Google'
                backgroundColor={'white'}
                labelColor={'#212121'}
                onClick={props.onClickLoginByGoogleButton}
                style={style.buttonLoginByGoogle}
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