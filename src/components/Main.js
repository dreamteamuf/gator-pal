import React, { Component } from 'react';
import SwipeableViews from 'react-swipeable-views'

class Main extends Component {
    constructor(props) {
        super(props);
        this.state={};
    }
    render() {
        return (
            <section id="Main">
            <SwipeableViews enableMouseEvents>
                <div>Bro</div>
                <div>What</div>
                <div>Please</div>
            </SwipeableViews>
            </section>
        );
    }
}

export default Main;