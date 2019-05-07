import * as React from 'react';
import ProfileCard from '../Components/ProfileCard/ProfileCard';
import PanelHeader from '../Components/PanelHeader/PanelHeader';
import ShowsCard from '../Components/ShowsCard/ShowsCard';
import './Home.css';

const updatable: string[] = ['title', 'description', 'djs', 'time', 'genre', 'facebook', 'tumblr', 'soundcloud', 'mixcloud'];
const blank = {
  id: 0,
  title: '',
  description: '',
  checkbox: false,
  djs: '',
  time: '',
  genre: '',
  facebook: '',
  tumblr: '',
  soundcloud: '',
  mixcloud: ''
};

interface State {
  count: number;
  shows: Array<{
    id: number,
    title: string,
    description: string,
    checkbox: boolean,
    djs: string,
    time: string,
    genre: string,
    facebook: string,
    tumblr: string,
    soundcloud: string,
    mixcloud: string
  }>;
}
interface Props { }

class Home extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      count: 1,
      shows: [{
        id: 0,
        title: 'ctrl+f yourself',
        description: 'On air conversations with strangers maybe listen to some of their music too. I’ll be nervous the entire hour.',
        checkbox: false,
        djs: 'Haejin Jo',
        time: 'Wednesday 12pm',
        genre: 'podcast, talk, slice-of-life',
        facebook: 'https://www.facebook.com/uclaradio.ctrlfyourself/',
        tumblr: '',
        soundcloud: 'https://soundcloud.com/ctrlfyourself',
        mixcloud: ''
      }]
    };
  }

  addShow = () => {
    const tempShow = { ...blank };
    tempShow.id = this.state.count;
    this.setState({
      count: this.state.count + 1,
      shows: [...this.state.shows, tempShow]
    });
  }

  onCancel = (id: number) => {
    const tempShows = this.state.shows;
    let index = 0;
    for (var i = 0; i < tempShows.length; i++) {
      if (tempShows[i].id === id) {
        index = i;
        break;
      }
    }
    const tempShow = this.state.shows[index];
    if (tempShow) {
      updatable.forEach(element => {
        (document.getElementById(element + id) as HTMLInputElement).value = tempShow[element] as string;
      });
    }
  }

  onSave = (id: number) => {
    const tempShows = this.state.shows;
    let index = 0;
    for (var i = 0; i < tempShows.length; i++) {
      if (tempShows[i].id === id) {
        index = i;
        break;
      }
    }
    const tempShow = this.state.shows[index];
    if (tempShow) {
      updatable.forEach(element => {
        tempShow[element] = (document.getElementById(element + id) as HTMLInputElement).value as string;
      });
    }
    tempShows[index] = tempShow;
    this.setState({ shows: tempShows });
  }

  onDelete = (id: number) => {
    const tempShows = this.state.shows;
    for (var i = 0; i < tempShows.length; i++) {
      if (tempShows[i].id === id) {
        tempShows.splice(i, 1);
      }
    }
    console.log(tempShows);
    this.setState({
      shows: tempShows
    });
  }

  render() {
    return (
      <div>
        <PanelHeader />
        <div className="cards-wrapper">
          <div className="title">
            DJ Profile
          </div>
          <ProfileCard />
          <div className="title">
            Shows
          </div>
          {this.state.shows.map((show, key) =>
            <ShowsCard key={key} id={show.id} title={show[updatable[0]]} description={show[updatable[1]]} checkbox={show.checkbox} djs={show[updatable[2]]} time={show[updatable[3]]} genre={show[updatable[4]]} facebook={show[updatable[5]]} tumblr={show[updatable[6]]} soundcloud={show[updatable[7]]} mixcloud={show[updatable[8]]} cancel={this.onCancel} save={this.onSave} delete={this.onDelete} />
          )}
          <div className="title" id="add-show" onClick={this.addShow}>
            + add new show
          </div>
          <div className="bottom-space" />
        </div>
      </div>
    );
  }
}

export default Home;
