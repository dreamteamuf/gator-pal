import React, {Component} from 'react'
import {Link as RouterLink} from 'react-router-dom'
import {Typography} from '@material-ui/core'
import clsx from 'clsx'
import PropTypes from 'prop-types'
import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        minHeight: 'fitcontent'
    },
    heading: {
        margin: theme.spacing(1)
    }
}))

const InfoBox = props => {
    const {className, ...rest} = props;
    const classes = useStyles();
    return (
        <div {...rest}
        className={clsx(classes.root), className}>
            <Typography
                className={classes.heading}
                variant="h6"
            >Patient Records</Typography>
        </div>
    )
}

InfoBox.propTypes = {
    className: PropTypes.string
}
export default InfoBox