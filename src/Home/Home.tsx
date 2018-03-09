import * as React from 'react';
import glamorous from 'glamorous';
import './Home.css';
const { Div } = glamorous;
import PageCard from './PageCard';
import CircleButton from './CircleButton';

class Home extends React.Component {
  render() {
    return (
      <Div margin="5px auto" padding="20px" width="100%">
        <Div id="nav" display="flex">
          <h1 id="titleText"> panel.uclaradio.com: links </h1>
          <Div
            className="buttonGroup"
            display="grid"
            grid-template-columns="5vw 5vw 5vw"
          >
            <CircleButton />
            <CircleButton />
            <CircleButton />
          </Div>
        </Div>

        <Div id="search" display="flex" justifyContent="center">
          <Div id="searchPadding" width={600} padding="30px">
            <input placeholder="Search" type="text" id="searchBar" />
          </Div>
        </Div>

        <Div
          className="link-grid"
          display="grid"
          grid-template-columns="repeat(auto-fill,minmax(400px, 1fr))"
          grid-template-rows="repeat(9, minmax(400px, 1fr))"
          grid-column-gap="30px"
          padding="50px"
        >
          {/* {
            this.props.pages && this.props.pages.map(page => (
              <PageCard id={page.id}> page.name </PageCard>
            ))
          } */}

          <PageCard> 1 </PageCard>
          <PageCard> 2 </PageCard>
          <PageCard> 3 </PageCard>
          <PageCard> 4 </PageCard>
          <PageCard> 5 </PageCard>
          <PageCard> 6 </PageCard>
          <PageCard> 7 </PageCard>
          <PageCard> 8 </PageCard>
          <PageCard> 9 </PageCard>
          <PageCard> 10 </PageCard>
          <PageCard> 11 </PageCard>
          <PageCard> 12 </PageCard>
          <PageCard> 13 </PageCard>
          <PageCard> 14 </PageCard>
          <PageCard> 15 </PageCard>
          <PageCard> 16 </PageCard>
          <PageCard> 2 </PageCard>
          <PageCard> 3 </PageCard>
          <PageCard> 1 </PageCard>
          <PageCard> 2 </PageCard>
          <PageCard> 3 </PageCard>
          <PageCard> 1 </PageCard>
          <PageCard> 2 </PageCard>
          <PageCard> 3 </PageCard>
          <PageCard> 1 </PageCard>
          <PageCard> 2 </PageCard>
          <PageCard> 3 </PageCard>
        </Div>
      </Div>
    );
  }
}

// ReactDOM.render(<Home />, document.getElementById('root'));

export default Home;
