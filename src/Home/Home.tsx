import * as React from 'react';
import * as ReactDOM from 'react-dom';
import glamorous from 'glamorous';
// const Home = () => <h1>Home Page</h1>;
const { Div } = glamorous;

const CircleButton = glamorous.button({
  borderRadius: '50%',
  color: 'black',
  width: '5vw',
  height: '5vw',
  padding: 10,
});

class Home extends React.Component {
  render() {
    return (
      <Div>
        <h1> Home Page </h1>
        <Div className="buttonGroup" textAlign="right">
          <CircleButton />
          <CircleButton />
          <CircleButton />
        </Div>

        <Div textAlign="center">
          <input type="text" id="searchBar" />
        </Div>
      </Div>
    );
  }
}

ReactDOM.render(<Home />, document.getElementById('root'));

export default Home;
