import React, { Component } from 'react';
import { Container, Grid, Header, Item, Icon, Segment } from 'semantic-ui-react'

const StatBlock = ({title = 'N/A', statistic = 'N/A', color = 'grey', icon}) => (
  <Segment inverted padded='very' color={`${color}`}>
    <Header size='huge' textAlign='center'>{`${statistic}`}</Header>
    <Header textAlign='center'>
      <Icon name={`${icon}`} />
      <Header.Content>
        {`${title}`}
      </Header.Content>
    </Header>
  </Segment>
);

export default StatBlock;
