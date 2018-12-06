import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Auth from './views/Auth'

ReactDOM.render(
    <MuiThemeProvider>
        <Auth >
            <App />
        </Auth>
    </MuiThemeProvider>,
    document.getElementById('root')
)