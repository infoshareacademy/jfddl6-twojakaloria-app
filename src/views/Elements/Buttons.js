import React from 'react'

import RaisedButton from 'material-ui/RaisedButton'

const style = {
    margin: 15
}

const Button = (props) => (
    <div>
        <RaisedButton
            label={props.label}
            backgroundColor={props.backgroundColor}
            labelColor={props.labelColor}
            style={style}
            onClick={props.onClick}
            icon={props.icon}
        />
    </div>
)
export default Button