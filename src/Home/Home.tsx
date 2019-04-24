import * as React from 'react';
import ProfileCard from '../Components/ProfileCard/ProfileCard';
import PanelHeader from '../Components/PanelHeader/PanelHeader';
import ShowsCard from '../Components/ShowsCard/ShowsCard';
import './Home.css';

let updatable: string[] = ['title', 'description', 'djs', 'time', 'genre', 'facebook', 'tumblr', 'soundcloud', 'mixcloud'];

interface State {
  shows: Array<{
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
      shows: [{
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
    let temp = this.state.shows.slice();
    this.setState({
      shows: [...temp, {
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
      }],
    });
  }

  onCancel = (id: number) => {
    updatable.forEach(element => {
      (document.getElementById(element + id) as HTMLInputElement).value = this.state.shows[id][element] as string;
    });
  }

  onSave = (id: number) => {
    updatable.forEach(element => {
      const temp = this.state.shows.slice();
      temp[id][element] = (document.getElementById(element + id) as HTMLInputElement).value as string;
      this.setState({ shows: temp });
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
          {this.state.shows.map((item, key) =>
            <ShowsCard key={key} id={key} title={item.title} description={item.description} checkbox={item.checkbox} djs={item.djs} time={item.time} genre={item.genre} facebook={item.facebook} tumblr={item.tumblr} soundcloud={item.soundcloud} mixcloud={item.mixcloud} cancel={this.onCancel} save={this.onSave} />
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
