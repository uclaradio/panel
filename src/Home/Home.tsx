import * as React from 'react';
import glamorous from 'glamorous';
import './Home.css';
const { Div } = glamorous;
import PageCard from './PageCard';
import CircleButton from './CircleButton';

// https://codepen.io/chriscoyier/pen/LWMdRv  for flexbox grid combo
// https://medium.com/samsung-internet-dev/common-responsive-layouts-with-css-grid-and-some-without-245a862f48df
// https://github.com/r-park/soundcloud-redux/blob/master/src/views/components/search-bar/search-bar.scss

class Home extends React.Component {
  render() {
    return (
      <Div margin="5px auto" padding="20px" width="100%">
        <nav>
          <h1 id="titleText"> panel.uclaradio.com: links </h1>
          <Div
            className="buttonGroup"
            display="grid"
            grid-template-columns="5fr 5fr 5fr"
          >
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

        <Div
          className="link-grid"
          display="grid"
          grid-template-columns="repeat(auto-fill,minmax(400px, 1fr))"
          grid-template-rows="repeat(9, minmax(400px, 1fr))"
          grid-column-gap="30px"
          padding="50px"
        >
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

export default Home;
