import React, {Component} from 'react'
import Profile from './Profile'
import clsx from 'clsx'
import PropTypes from 'prop-types';
import {makeStyles} from '@material-ui/core/styles'
import { Divider, Drawer } from '@material-ui/core';
import InfoBox from './InfoBox'

const useStyles = makeStyles(theme => ({
    drawer: {
        width: 240,
        [theme.breakpoints.up('lg')]: {
            marginTop: 64,
            height: 'calc(100% - 64px)'
        }
    },
    root: {
        backgroundColor: theme.palette.white,
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        padding: theme.spacing(2)
    },
    divider: {
        margin: theme.spacing(2, 0)
      }
}))

const SideBar = props => {
    const {open,variant, ...rest} = props
    const classes = useStyles()
    return (
        <Drawer
        anchor="left"
        open={open}
        classes={{paper: classes.drawer}}
        variant={variant}
    >
    <div {...rest} className={clsx(classes.root)}>
        <Profile/>
        <Divider className={classes.divider}></Divider>
        <InfoBox/>
    </div>
    </Drawer>
    )
}
SideBar.propTypes = {
    className: PropTypes.string,
    onClose: PropTypes.func,
    open: PropTypes.bool.isRequired,
    variant: PropTypes.string.isRequired
};

export default SideBar