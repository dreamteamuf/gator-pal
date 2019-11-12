import React, {Component} from 'react'
import {Divider, Drawer} from '@material-ui/core'




class SideBar extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <Drawer
                anchor="left"
                open={this.props.open}
                variant={this.props.variant}
            >
                

            </Drawer>
        )
    }
}