import React, { Component } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import personImage from '../../assets/personpic.png'

const useStyles = makeStyles({
    card: {
        minWidth: 500, //Need to check if responsive
        padding: 10 //padding within card
    },
    media: {
        height: 100,
        width: 100,
        position: 'left',
    },
    root: {
        padding: 10 //padding in between cards
    },
    nameTitle: {
        padding: 10 //padding for patient name
    },

});

//Need to add functions for grabbing data from DB

function PatientCard() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Card className={classes.card}>
                <CardActionArea>
                    <Grid
                        container
                        direction="row"
                        alignItems="center"
                    >
                        <CardMedia
                            className={classes.media}
                            image={personImage}
                            title="Patient"
                        />
                        <div className={classes.nameTitle}>
                            <Typography variant="h5" component="h5" >
                                Patient name
                        </Typography>
                        </div>
                    </Grid>

                    <CardContent>
                        <Typography variant="body" color="textSecondary" component="p">
                            <b>DOB:</b> mm/dd/yyyy <br></br>
                            <b>Reason for admittance:</b> Fell off bicycle :( <br></br>
                            <b >Parent Name:</b> Mom <br></br>
                            <b>Address:</b> 42 Wallaby Way, Sydney <br></br>
                            <b>Phone Number:</b> 1234 <br></br>
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
            <CardActions>
                {/* Insert action to go to patient dashboard*/}
            </CardActions>
        </div>
    );
}

export default PatientCard; 
