import React from 'react'
import Button from '../Elements/Buttons'
import Input from '../Elements/Input'


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
            />
            <Button
                label='Sing in'
                onClick={props.onClickSingInButton}
            />
        </div>
        <div>
            <Button
                label='Login by Google'
                backgroundColor={'#F44336'}
                labelColor={'#212121'}
                onClick={props.onClickLoginByGoogleButton}
            />
        </div>
    </div>
)
export default Forms