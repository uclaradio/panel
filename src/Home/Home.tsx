import * as React from 'react';
import glamorous from 'glamorous';
import './Home.css';
const { Div } = glamorous;
import PageCard from './PageCard';
import CircleButton from './CircleButton';
import Grid from 'material-ui/Grid';

class Home extends React.Component {
  render() {
    return (
      <Div margin="5px auto" padding="20px" width="100%">
        <Grid container spacing={24}>
          <Grid item>
            <nav>
              <h1 id="titleText"> panel.uclaradio.com: links </h1>
              <Div className="buttonGroup">
                <CircleButton />
                <CircleButton />
                <CircleButton />
              </Div>
            </nav>

            <Div id="search" display="flex" justifyContent="center">
              <Div id="searchPadding" width={600} padding="30px">
                <input placeholder="Search" type="text" id="searchBar" />
              </Div>
            </Div>
          </Grid>

          <Grid item sm={4}>
            <PageCard />
          </Grid>
          <Grid item sm={4}>
            <PageCard />
          </Grid>
          <Grid item sm={4}>
            <PageCard />
          </Grid>
        </Grid>
      </Div>
    );
  }
}

export default Home;
