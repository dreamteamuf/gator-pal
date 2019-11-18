import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import './Therapy.css';
class Therapy extends Component {
    constructor(props) {
        super(props);
        this.state={};
    }
    render() {
        return (
            <section id="Therapy">
                <Grid
                    container
                    direction="row"
                    justify="space-evenly"
                    alignItems="center"
                >
                    <Card className="therapy-card"> Hello World</Card>
                    <Card className="therapy-card"> Hello World</Card>
                    <Card className="therapy-card"> Hello World</Card>
                    <Card className="therapy-card"> Hello World</Card>
                    <Card className="therapy-card"> Hello World</Card>
                    <Card className="therapy-card"> Hello World</Card>
                    <Card className="therapy-card"> Hello World</Card>
                </Grid>
            </section>
        );
    }
}
export default Therapy;