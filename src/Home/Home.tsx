import * as React from 'react';
import * as ReactDOM from 'react-dom';
import glamorous from 'glamorous';
// const Home = () => <h1>Home Page</h1>;
const { Div } = glamorous;

const CircleButton = glamorous.button({
  borderRadius: '50%',
  backgroundColor: 'black',
  width: '4vw',
  height: '4vw',
  padding: 3,
});

const RectangleThing = glamorous.div({
  width: 380,
  height: 250,
  backgroundColor: 'rgba(255, 255, 255, 0.8)',
});

// const LinkGrid = glamorous.div({
//   display:"grid",
//   grid-template-columns: 400 400 400,
//   grid-column-gap: 40px,

// })
class Home extends React.Component {
  render() {
    return (
      <Div margin="5px auto" padding="20px" width="100%">
        <Div id="nav" display="grid" grid-template-columns="80vw 20vw">
          <h1> panel.uclaradio.com: links </h1>
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

        <Div id="search" margin-bottom="25px">
          <Div textAlign="center">
            <input type="text" id="searchBar" color="rgba(255,255,255,.5)" />
          </Div>
        </Div>

        <Div
          className="link-grid"
          display="grid"
          grid-template-columns="repeat(3,400px)"
          grid-template-rows="repeat(9, 400px)"
          grid-column-gap="50px"
          padding="50px"
        >
          <RectangleThing> 1 </RectangleThing>
          <RectangleThing> 2 </RectangleThing>
          <RectangleThing> 3 </RectangleThing>
          <RectangleThing> 1 </RectangleThing>
          <RectangleThing> 2 </RectangleThing>
          <RectangleThing> 3 </RectangleThing>
          <RectangleThing> 1 </RectangleThing>
          <RectangleThing> 2 </RectangleThing>
          <RectangleThing> 3 </RectangleThing>
          <RectangleThing> 1 </RectangleThing>
          <RectangleThing> 2 </RectangleThing>
          <RectangleThing> 3 </RectangleThing>
          <RectangleThing> 1 </RectangleThing>
          <RectangleThing> 2 </RectangleThing>
          <RectangleThing> 3 </RectangleThing>
          <RectangleThing> 1 </RectangleThing>
          <RectangleThing> 2 </RectangleThing>
          <RectangleThing> 3 </RectangleThing>
          <RectangleThing> 1 </RectangleThing>
          <RectangleThing> 2 </RectangleThing>
          <RectangleThing> 3 </RectangleThing>
          <RectangleThing> 1 </RectangleThing>
          <RectangleThing> 2 </RectangleThing>
          <RectangleThing> 3 </RectangleThing>
          <RectangleThing> 1 </RectangleThing>
          <RectangleThing> 2 </RectangleThing>
          <RectangleThing> 3 </RectangleThing>
        </Div>
      </Div>
    );
  }
}

ReactDOM.render(<Home />, document.getElementById('root'));

export default Home;
