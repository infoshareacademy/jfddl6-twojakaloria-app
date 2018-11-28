import React from 'react'

import RaisedButton from 'material-ui/RaisedButton'

const style = {
    margin: 15
}

const Button = (props) => (
    <div>
        <RaisedButton
            label={props.label}
            backgroundColor={"#4FC3F7"}
            labelColor={'#212121'}
            style={style}
            onClick={props.onClick}
        />
    </div>
)
export default Button