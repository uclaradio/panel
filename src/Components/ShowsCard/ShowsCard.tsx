import * as React from 'react';
import './ShowsCard.css';
import ShowCardInfo from '../ShowCardInfo/ShowCardInfo';
import ListItem from '../../Components/ListItem/ListItem';

require('typeface-sarabun');
const editIcon = require('../../Graphics/Edit.png');
const showPic = require('../../Graphics/ShowPic.png');

interface State {
    edittable: boolean;
}

interface Props {
    id: number;
    title: string;
    description: string;
    checkbox: boolean;
    djs: string;
    time: string;
    genre: string;
    facebook: string;
    tumblr: string;
    soundcloud: string;
    mixcloud: string;
    cancel: Function;
    save: Function;
}

export default class ShowsCard extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            edittable: true
        };
    }
    onEdit = () => {
        this.setState({ edittable: false });
    }

    onCancel = () => {
        this.setState({ edittable: true });
        this.props.cancel(this.props.id);
    }

    onSave = () => {
        this.setState({ edittable: true });
        this.props.save(this.props.id);
    }

    render() {
        return (
            <div className="shows-container">
                {this.state.edittable ?
                    <img className="edit-icon" onClick={this.onEdit} src={editIcon} /> :
                    (<div className="buttons-container">
                        <div style={{ color: '#FF0000' }} onClick={this.onCancel} >CANCEL</div>
                        <div style={{ color: 'RoyalBlue' }} onClick={this.onSave} >SAVE</div>
                    </div>)}
                <div className="left-side">
                    <img className="show-picture" src={showPic} />
                    <ShowCardInfo id={this.props.id} title={this.props.title} description={this.props.description} edit={this.state.edittable} checkbox={this.props.checkbox} />
                </div>
                <div className="vl" />
                <table className="table-wrapper">
                    <ListItem title="DJs" value={this.props.djs} id={'djs' + this.props.id} placeholder="Enter DJ's Here" edit={this.state.edittable} />
                    <ListItem title="time" value={this.props.time} id={'time' + this.props.id} placeholder="Enter Time Here" edit={this.state.edittable} />
                    <ListItem title="genre" value={this.props.genre} id={'genre' + this.props.id} placeholder="Enter Genre Here" edit={this.state.edittable} />
                    <ListItem title="facebook" value={this.props.facebook} id={'facebook' + this.props.id} placeholder="https://www.facebook.com/yourshow" edit={this.state.edittable} />
                    <ListItem title="tumblr" value={this.props.tumblr} id={'tumblr' + this.props.id} placeholder="https://yourshow.tumblr.com" edit={this.state.edittable} />
                    <ListItem title="soundcloud" value={this.props.soundcloud} id={'soundcloud' + this.props.id} placeholder="https://soundcloud.com/yourshow" edit={this.state.edittable} />
                    <ListItem title="mixcloud" value={this.props.mixcloud} id={'mixcloud' + this.props.id} placeholder="https://www.mixcloud.com/yourshow" edit={this.state.edittable} />
                </table>
            </div>
        );
    }
}