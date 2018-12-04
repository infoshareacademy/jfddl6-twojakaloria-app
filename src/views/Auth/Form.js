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
            />
        </div>
        <div>
            <Button
                label='Login'
            />
            <Button
                label='Sing in'
            />
        </div>
        <div>
            <Button
                label='Login in with Google'
                backgroundColor={'#F44336'}
                labelColor={'#212121'}
            />
        </div>
    </div>
)
export default Forms