import React, {Component} from 'react'
import {Link as RouterLink} from 'react-router-dom'
import {Typography} from '@material-ui/core'
import clsx from 'clsx'
import PropTypes from 'prop-types'
import Paper from '@material-ui/core/Paper'
import PeopleIcon from '@material-ui/icons/People';
import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        minHeight: 'fitcontent'
    },
    mycol: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    papercol: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        margin: theme.spacing(2)
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
            {/* <Typography
                className={classes.heading}
                variant="p"
            >Patient Records</Typography> */}
            <Paper className={classes.papercol}><PeopleIcon/><p>last met 10:15pm</p></Paper>
            <Paper className={classes.papercol}><PeopleIcon/><p>last met 10:15pm</p></Paper>
            <Paper className={classes.papercol}><PeopleIcon/><p>last met 10:15pm</p></Paper>
            <Paper className={classes.papercol}><PeopleIcon/><p>last met 10:15pm</p></Paper>
            <div className={classes.mycol}><p>patient record</p><p>1/5</p></div>
            <div className={classes.mycol}><p>parent</p><p>Marc Diaz</p></div>
            <div className={classes.mycol}><p>Age</p><p>7</p></div>
            <div className={classes.mycol}><p>Reason</p><p>S &amp; T</p></div>
            <div className={classes.mycol}><p>Pain</p><p>6/10</p></div>
            <div className={classes.mycol}><p>Ethnicity</p><p>Asian</p></div>        
        </div>
    )
}

InfoBox.propTypes = {
    className: PropTypes.string
}
export default InfoBox