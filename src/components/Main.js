import React, { Component } from 'react';
import SwipeableViews from 'react-swipeable-views'
import Paper from '@material-ui/core/Paper'
import '../assets/styles/main.css'
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

            <SwipeableViews enableMouseEvents index={index} onChangeIndex={this.handleChangeIndex}>
                <div className="slider slide-1 container">
                    <img src={DoctorImage} alt="cartoon doctor" className="doctor-logo"></img>
                    <p>please work</p>
                </div>
                <div className="slider slide-2 container">
                    <Paper className="first">
                        <p>please work</p>
                    </Paper>
                </div>
                <div className="slider slide-3 container">
                    <Paper className="first">
                        <p>please work</p>
                    </Paper>
                </div>
            </SwipeableViews>
            <Pagination dots={3} index={index} onChangeIndex={this.handleChangeIndex}/>
            </section>
        );
    }
}

export default Main;