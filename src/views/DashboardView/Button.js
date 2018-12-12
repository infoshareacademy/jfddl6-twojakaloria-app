import React from 'react'
import RaisedButton from 'material-ui/RaisedButton'

const Button = (props) => (
    <div>
        <RaisedButton
            label={props.label}
            primary={true}
            style={props.style}
            onClick={props.onClick}
            fullWidth={props.fullWidth}
        />
    </div>
)
export default Button