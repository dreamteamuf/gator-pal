import React, { Component } from "react";
import './AllPatients.css'
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import PatientCard from '../../components/utils/PatientCard'

class AllPatients extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    showCards = () => {//Placeholder
        let cards = []
        for (let i = 0; i < 10; i++) {
            cards.push(<PatientCard></PatientCard>)
        }
        return cards;
    };

    render() {

        return (
            <section id="AllPatients">
                <div className='searchbar' noValidate autoComplete="off">
                    <form>
                        <div>
                            <TextField
                                id="standard-search"
                                label="Search for a patient"
                                type="search"
                                className="textField"
                                margin="normal"
                            />
                        </div>
                    </form>
                </div>

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
