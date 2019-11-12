import React from 'react'
import {Link as RouterLink} from 'react-router-dom'
import {Avatar, Typography} from '@material-ui/core'
import clsx from 'clsx'
import PropTypes from 'prop-types'
import {makeStyles} from '@material-ui/core/styles'



const useStyles = makeStyles(theme => ({
    root: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      minHeight: 'fit-content'
    },
    avatar: {
      width: 60,
      height: 60
    },
    name: {
      marginTop: theme.spacing(1)
    }
  }));
  
  const Profile = props => {
    const { className, ...rest } = props;
  
    const classes = useStyles();
  
    var user = {
        name:"Marc Diaz",
        bio: "pediatric patient"
    }
  
    return (
      <div
        {...rest}
        className={clsx(classes.root, className)}
      >
            <Avatar
                alt="Person"
                className="Avatar"
                component={RouterLink}
                to="/settings"
            >H</Avatar>
            <Typography
                className={classes.name}
                variant="h5"
            >
            {user.name}
            </Typography>
            <Typography variant="body2">{user.bio}</Typography>
      </div>
    );
  };
  
  Profile.propTypes = {
    className: PropTypes.string
  };
  
  export default Profile;
