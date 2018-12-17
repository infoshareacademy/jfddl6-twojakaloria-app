import React from 'react'
import Snackbar from 'material-ui/Snackbar'

const Statement = (props) => (
    <div>
        <Snackbar
            open={props.isStatementOpen}
            message={props.statementMessage}
            autoHideDuration={4000}
            onRequestClose={props.handleRequestClose}
        />
    </div>
)

export default Statement