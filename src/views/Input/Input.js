import React from 'react'
import TextField from 'material-ui/TextField'

const Input = (props) => (
    <TextField 
        hintText={props.hintText}
        value={props.value}
        onChange={props.onChange}
    />
)
export default Input