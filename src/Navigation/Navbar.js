import React from 'react'
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer'
import IconLogout from 'material-ui/svg-icons/action/power-settings-new'
import { connect } from 'react-redux'
import { logOutAsyncAction } from '../state/auth'

class Navbar extends React.Component {
    state = {
        isDrawerOpen: false
    }
    toggleDrawer = () => this.setState({ isDrawerOpen: !this.state.isDrawerOpen })
    render() {
        return (
            <div>
                <AppBar
                    title={this.props.label ? this.props.label : 'Twoja Kaloria'}
                    onLeftIconButtonClick={this.toggleDrawer}
                    iconElementRight={<IconLogout style={{ marginTop: '50%', cursor: 'pointer' }} />}
                    onRightIconButtonClick={this.props._logOutAsyncAction}
                />
                <Drawer
                    docked={false}
                    width={200}
                    open={this.state.isDrawerOpen}
                    onRequestChange={this.toggleDrawer}
                >
                    {
                        this.props.children ?
                            this.props.children.map ?
                                this.props.children.map(child => (
                                    React.cloneElement(
                                        child,
                                        {
                                            onClick: this.toggleDrawer,
                                            key: child.props.to
                                        }
                                    )
                                ))
                                :
                                React.cloneElement(
                                    this.props.children,
                                    { onClick: this.toggleDrawer }
                                )
                            :
                            null

                    }
                </Drawer>
            </div>
        )
    }

}

const mapDispatchToProps = dispatch => ({
    _logOutAsyncAction: () => dispatch(logOutAsyncAction()),
})
export default connect(null, mapDispatchToProps)(Navbar)