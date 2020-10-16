import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import axios from 'axios';

import Bug from '../components/Bug';

class home extends Component {
  state = {
    bugs: null,
  };

  componentDidMount() {
    axios
      .get('/bugs')
      .then(res => {
        console.log(res.data);
        this.setState({
          bugs: res.data,
        });
      })
      .catch(err => console.log(err));
  }
  render() {
    let recentBugs = this.state.bugs ? (
      this.state.bugs.map(bug => <Bug bug={bug} />)
    ) : (
      <p>Loading...</p>
    );
    return (
      <Grid container spacing={8}>
        <Grid item sm={8} xs={12}>
          {recentBugs}
        </Grid>
        <Grid item sm={4} xs={12}>
          <p>Profile...</p>
        </Grid>
      </Grid>
    );
  }
}

export default home;
