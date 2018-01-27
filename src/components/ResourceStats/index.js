import React, { Component } from 'react';
import { Table } from 'semantic-ui-react'

import _ from 'lodash'

class ResourceStats extends Component {
  constructor(props) {
    super(props);
    const { data } = this.props;
    this.state = {
      data: data,
      column: 'resource',
      direction: 'ascending',
    };
  }

  componentWillReceiveProps = (nextProps) => {
    const { data } = nextProps;
    if (data && data.length) {
      const { column, direction } = this.state
      this.setState({
        data: this.sortData(data, column, direction),
      });
    }
  }

  handleSort = (clickedColumn) => {
    const { column, data, direction } = this.state

    if (data && data.length) {
      this.setState({
        column: clickedColumn,
        data: this.sortData(data, clickedColumn, direction),
        direction: direction === 'ascending' ? 'descending' : 'ascending',
      });
    }
  }

  sortData = (data, column, direction) => {
    const sortOrder = direction === 'ascending' ? 'desc' : 'asc';
    return _.orderBy(data, [column], [sortOrder]);
  }

  render() {
    const { column, data, direction } = this.state;
    const dataPresent = data && data.length > 0;

    return (
      <Table celled fixed sortable={dataPresent}>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell sorted={column === 'resource' ? direction : null} onClick={() => this.handleSort('resource')}>
              Name
            </Table.HeaderCell>
            <Table.HeaderCell sorted={column === 'successCount' ? direction : null} onClick={() => this.handleSort('successCount')}>
              Success Count
            </Table.HeaderCell>
            <Table.HeaderCell sorted={column === 'failureCount' ? direction : null} onClick={() => this.handleSort('failureCount')}>
              Failure Count
            </Table.HeaderCell>
            <Table.HeaderCell sorted={column === 'totalCount' ? direction : null} onClick={() => this.handleSort('totalCount')}>
              Total Count
            </Table.HeaderCell>
            <Table.HeaderCell sorted={column === 'averageDuration' ? direction : null} onClick={() => this.handleSort('averageDuration')}>
              Durartion Avg
            </Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {
            !dataPresent &&
              <Table.Row>
                <Table.Cell colSpan='5' textAlign='center'>{'No logs are currently available'}</Table.Cell>
              </Table.Row>
          }
          {
            dataPresent && data.map(({ resource, successCount, failureCount, totalCount, averageDuration }) => (
              <Table.Row key={resource}>
                <Table.Cell>{resource}</Table.Cell>
                <Table.Cell>{successCount}</Table.Cell>
                <Table.Cell>{failureCount}</Table.Cell>
                <Table.Cell>{totalCount}</Table.Cell>
                <Table.Cell>{Math.round(averageDuration * 100) / 100 + 'ms'}</Table.Cell>
              </Table.Row>
            ))
          }
        </Table.Body>
      </Table>
    )
  }
}

export default ResourceStats;
