import React, { Component } from 'react';
import { VictoryBar, VictoryChart, VictoryAxis, VictoryGroup, VictoryLine, VictoryArea, VictoryPie, VictoryScatter, VictoryTheme } from 'victory';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid'
import './Analytics.css'

const data = [
    {quarter: 1, earnings: 13000},
    {quarter: 2, earnings: 16500},
    {quarter: 3, earnings: 14250},
    {quarter: 4, earnings: 19000}
  ];
class Analytics extends Component {
    constructor(props) {
        super(props);
        this.state={};
    }
    render() {
        return (
            <section id="Analytics">
                <Grid
                container
                direction="row"
                justify="space-evenly"
                alignItems="center"
                className="top-analytics"
                >
                    <Paper className="stats">
                        <h1>Test</h1>
                    </Paper>
                    <Paper className="stats">
                        <h1>Test</h1>
                    </Paper>
                    <Paper className="stats">
                        <h1>Test</h1>
                    </Paper>
                </Grid>
                <Grid 
                container
                direction="row"
                justify="space-evenly"
                alignItems="center"
                >
                    <Paper className="chart-container">
                    <VictoryChart>
                        <VictoryArea
                            data={[
                            { x: 1, y: 2, y0: 0 },
                            { x: 2, y: 3, y0: 1 },
                            { x: 3, y: 5, y0: 1 },
                            { x: 4, y: 4, y0: 2 },
                            { x: 5, y: 6, y0: 2 }
                            ]}
                        />
                    </VictoryChart>
                    </Paper>
                    <Paper className="chart-container">
                    <VictoryChart>
                        <VictoryGroup offset={20}
                            colorScale={"qualitative"}
                        >
                            <VictoryBar
                            data={[{ x: 1, y: 1 }, { x: 2, y: 2 }, { x: 3, y: 5 }]}
                            />
                            <VictoryBar
                            data={[{ x: 1, y: 2 }, { x: 2, y: 1 }, { x: 3, y: 7 }]}
                            />
                        </VictoryGroup>
                    </VictoryChart>
                    </Paper>
                    <Paper className="chart-container">
                        <VictoryChart
                            // adding the material theme provided with Victory
                            theme={VictoryTheme.material}
                            domainPadding={20}
                        >
                            <VictoryAxis
                            tickValues={[1, 2, 3, 4]}
                            tickFormat={["Quarter 1", "Quarter 2", "Quarter 3", "Quarter 4"]}
                            />
                            <VictoryAxis
                            dependentAxis
                            tickFormat={(x) => (`$${x / 1000}k`)}
                            />
                            <VictoryBar
                            data={data}
                            x="quarter"
                            y="earnings"
                            />
                        </VictoryChart>
                    </Paper>
                    <Paper className="chart-container">
                    <VictoryChart
                        theme={VictoryTheme.material}
                        >
                        <VictoryLine
                            style={{
                            data: { stroke: "#c43a31" },
                            parent: { border: "1px solid #ccc"}
                            }}
                            data={[
                            { x: 1, y: 2 },
                            { x: 2, y: 3 },
                            { x: 3, y: 5 },
                            { x: 4, y: 4 },
                            { x: 5, y: 7 }
                            ]}
                        />
                    </VictoryChart>
                    </Paper>
                    <Paper className="chart-container">
                    <VictoryChart
                        theme={VictoryTheme.material}
                        domain={{ x: [0, 5], y: [0, 7] }}
                        >
                        <VictoryScatter
                            style={{ data: { fill: "#c43a31" } }}
                            size={7}
                            data={[
                            { x: 1, y: 2 },
                            { x: 2, y: 3 },
                            { x: 3, y: 5 },
                            ]}
                        />
                    </VictoryChart>
                    </Paper>
                    <Paper className="chart-container">
                        <VictoryPie
                            data={[
                                { x: "Cats", y: 35 },
                                { x: "Dogs", y: 40 },
                                { x: "Birds", y: 55 }
                            ]}
                        />
                    </Paper>
                </Grid>
            </section>
        );
    }
}

export default Analytics;