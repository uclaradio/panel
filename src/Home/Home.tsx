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
          <div>
            DJ Profile
          </div>
          <ProfileCard />
          <div>
            Shows
          </div>
          <ShowsCard />
          <div>
            + add new show
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
