import * as React from 'react';
import './ProfileCard.css';
import ProfileCardInfo from '../../Components/ProfileCardInfo/ProfileCardInfo';
import ListItem from '../../Components/ListItem/ListItem';

require('typeface-sarabun');
const editIcon = require('../../Graphics/Edit.png');
const profilePic = require('../../Graphics/ProfilePic.png');
const updatable: string[] = ['djname', 'about', 'name', 'email', 'phone'];

interface State {
    djname?: string;
    about?: string;
    name?: string;
    email?: string;
    phone?: string;
    edittable?: boolean;
}
interface Props { }

export default class ProfileCard extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            djname: 'DJ Acorn',
            about: 'top 40 pop entusiast, but genre-curious, host of ctrl+f yourself, every wed 12pm',
            name: 'Haejin Jo',
            email: 'professionalhaejin@gmail.com',
            phone: '',
            edittable: true
        };
    }

    onEdit = () => {
        this.setState({ edittable: false });
    }

    onCancel = () => {
        updatable.forEach(element => {
            (document.getElementById(element) as HTMLInputElement).value = this.state[element] as string;
        });
        this.setState({
            edittable: true
        });
    }

    onSave = () => {
        updatable.forEach(element => {
            this.setState({
                [element]: (document.getElementById(element) as HTMLInputElement).value as string
            });
        });
        this.setState({
            edittable: true
        });
    }

    render() {
        return (
            <div className="profile-container">
                {this.state.edittable ?
                    <img className="edit-icon" onClick={this.onEdit} src={editIcon} /> :
                    (<div className="buttons-container">
                        <div style={{ color: '#FF0000' }} onClick={this.onCancel} >CANCEL</div>
                        <div style={{ color: 'RoyalBlue' }} onClick={this.onSave} >SAVE</div>
                    </div>)}
                <div className="left-side">
                    <img className="profile-picture" src={profilePic} />
                    <ProfileCardInfo djname={this.state.djname} about={this.state.about} edit={this.state.edittable} />
                </div>
                <div className="vl" />
                <table className="table-wrapper">
                    <ListItem title="full name" value={this.state.name} id="name" placeholder="Enter Name Here" edit={this.state.edittable} />
                    <ListItem title="email" value={this.state.email} id="email" placeholder="Enter Email Here" edit={this.state.edittable} />
                    <ListItem title="phone" value={this.state.phone} id="phone" placeholder="Enter Phone Here" edit={this.state.edittable} />
                </table>
            </div>
        );
    }
}