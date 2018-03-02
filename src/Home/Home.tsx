import * as React from 'react';
import * as ReactDOM from 'react-dom';
import glamorous from 'glamorous';
// const Home = () => <h1>Home Page</h1>;
const { Div } = glamorous;

const CircleButton = glamorous.button({
  borderRadius: '50%',
  backgroundColor: 'black',
  width: '5vw',
  height: '5vw',
  padding: 5,
});

const RectangleThing = glamorous.div({
  width: 100,
  height: 50,
  backgroundColor: 'white',
});

class Home extends React.Component {
  render() {
    return (
      <Div>
        <Div id="nav">
          <h1> panel.uclaradio.com: links </h1>
          <Div className="buttonGroup" textAlign="right">
            <CircleButton />
            <CircleButton />
            <CircleButton />
          </Div>
        </Div>

        <Div id="search">
          <Div textAlign="center">
            <input type="text" id="searchBar" />
          </Div>
        </Div>

        <Div id="link-grid">
          <RectangleThing />
          <RectangleThing />
          <RectangleThing />
        </Div>
      </Div>
    );
  }
}

ReactDOM.render(<Home />, document.getElementById('root'));

export default Home;
