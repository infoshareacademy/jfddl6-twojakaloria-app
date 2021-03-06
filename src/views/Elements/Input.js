import React from 'react'
import TextField from 'material-ui/TextField'

const Input = (props) => (
    <TextField
        hintText={props.hintText}
        value={props.value}
        fullWidth={props.fullWidth}
        onChange={props.onChange}
        style={props.labelStyle}
        type={props.type}
        floatingLabelText={props.floatingLabelText}
        label={props.label}
    />
)
export default Input