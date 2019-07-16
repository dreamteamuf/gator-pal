import React, { Component } from 'react'
import SwipeableViews from 'react-swipeable-views'
import Paper from '@material-ui/core/Paper'
import '../assets/styles/main.css'
import TextField from '@material-ui/core/TextField'
import DoctorImage from '../assets/surgerydoctor.png'
import Pagination from './utils/Pagination'



class Main extends Component {
    
    constructor(props) {
        super(props);
        this.state={
            index: 0
        };
    }
    handleChangeIndex = index => {
        this.setState({
          index,
        });
    };

    render() {
        const {index} = this.state
        return (
            <section id="Main">

            <SwipeableViews enableMouseEvents index={index} onChangeIndex={this.handleChangeIndex} className="swipeable-views-container">
                <div className="slider slide-1 container">
                    <Paper className="first">
                        <img src={DoctorImage} alt="cartoon doctor" className="doctor-logo"></img>
                        <div> Hello And Welcome to Gator Pal! Take this survey and we'll get you up to speed</div>
                    </Paper>
                </div>
                <div className="slider slide-2 container">
                    <Paper className="second">
                    <form className="theform" noValidate>
                        <div className="center">
                            Registration
                        </div>
                        <div className="theform" >
                            <TextField
                                required
                                id="standard-name"
                                label="Name"
                                className="textField"
                                placeholder="Name"
                                margin="normal"
                            />
                            <TextField
                                id="date"
                                label="Birthday"
                                type="date"
                                defaultValue="2017-05-24"
                                className="textField"
                                InputLabelProps={{
                                shrink: true,
                                }}
                                margin="normal"
                            />
                        </div>

                        <TextField
                            id="standard-full-width"
                            label="Name"
                            style={{ margin: 8 }}
                            placeholder="Address"
                            fullWidth
                            margin="normal"
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    </form>
                    </Paper>
                </div>
                <div className="slider slide-3 container">
                    <Paper className="first">
                        <img src={DoctorImage} alt="cartoon doctor" className="doctor-logo"></img>
                        <div> Hello And Welcome to Gator Pal! Take this survey and we'll get you up to speed</div>
                    </Paper>
                </div>
            </SwipeableViews>
            <Pagination dots={3} index={index} onChangeIndex={this.handleChangeIndex}/>
            </section>
        );
    }
}

export default Main;