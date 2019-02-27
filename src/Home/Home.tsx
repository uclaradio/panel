import * as React from 'react';
import ProfileCard from '../Components/ProfileCard/ProfileCard';
import Header from '../Components/Header/Header';
import ShowsCard from '../Components/ShowsCard/ShowsCard';
import './Home.css';

class Home extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div className="cards-wrapper">
          <div className="title">
            DJ Profile
          </div>
          <ProfileCard />
          <div className="title">
            Shows
          </div>
          <ShowsCard />
          <div className="title">
            + add new show
          </div>
          <div className="bottom-space" />
        </div>
      </div>
    );
  }
}

export default Home;
