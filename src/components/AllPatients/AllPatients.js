import React, { Component } from "react";
import './AllPatients.css'
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

function MediaCard() {
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
                            Patient details go here
                </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
            <CardActions>
            {/* Insert action  */}
            </CardActions>
        </div>
    );
}


class AllPatients extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    showCards = () => {//this function was placed to allow a "unlimited" amount of cards
        let cards = []
        for (let i = 0; i < 10; i++) {
            cards.push(<MediaCard className="patientCard"></MediaCard>)
        }
        return cards;
    };

    render() {

        return (
            <section id="AllPatients">
                
                <Grid
                    container
                    direction="column"
                    justify="space-evenly"
                    alignItems="center"
                    className="top-allpatients"
                >
                    <div>
                        {this.showCards()}
                    </div>
                </Grid>


            </section>
        );
    }
}

export default AllPatients;
