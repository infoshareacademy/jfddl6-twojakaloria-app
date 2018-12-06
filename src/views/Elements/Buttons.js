import React from 'react'

import RaisedButton from 'material-ui/RaisedButton'

const style = {
    margin: 10
}

const Button = (props) => (
        <RaisedButton
            label={props.label}
            backgroundColor={props.backgroundColor}
            labelColor={props.labelColor}
            style={props.style}
            onClick={props.onClick}
            icon={props.icon}
            fullWidth={props.fullWidth}
        />
)
export default Button