import React, { Component } from 'react';
import ResourceStats from './ResourceStats/index'
import StatBlock from './StatBlock/index'

import { Container, Divider, Dropdown, Grid, Icon, Image, Input, Label,
  List, Menu, Segment, Search, Table, Visibility } from 'semantic-ui-react'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  componentDidMount = () => {
    fetch('https://z7ghltwol7.execute-api.us-east-1.amazonaws.com/dev/summary')
      .then(response => (
        response.json()
      ))
      .then(data => {
        let totalDuration = 0;
        let totalRequests = 0;
        let totalSuccess  = 0;
        data.forEach((item) => {
          totalDuration += item.averageDuration;
          totalRequests += item.totalCount;
          totalSuccess += item.successCount;
        });

        const averageDuration = Math.round((totalDuration / totalRequests) * 100) / 100 + 'ms';
        const successPercentage = Math.round((totalSuccess / totalRequests) * 100) + '%';

        this.setState({
          averageDuration,
          data: data,
          successPercentage,
          totalRequests,
        });
      })
      .catch(error => {
        console.error('Error fetching summary data.', error);
      });
  }

  render() {
    const { averageDuration, data, successPercentage, totalRequests } = this.state;

    return (
      <div>
        <Grid columns={3} divided>
          <Grid.Row>
            <Grid.Column>
              <StatBlock title='Request Count' statistic={totalRequests} color='teal' icon='world' />
            </Grid.Column>
            <Grid.Column>
              <StatBlock title='Success Rate' statistic={successPercentage} color='grey' icon='check circle' />
            </Grid.Column>
            <Grid.Column>
              <StatBlock title='Duration Avg' statistic={averageDuration} color='orange' icon='wait' />
            </Grid.Column>
          </Grid.Row>
        </Grid>

        <ResourceStats data={data} ></ResourceStats>
      </div>
    )
  }
}

export default App;
