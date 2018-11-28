import React from 'react'
import Field from 'material-ui/SelectField'

const SelectField = (props) => (
    <Field
        hintText={props.hintText}
        value={props.value}
        onChange={props.onChange}
    />
)
export default SelectField