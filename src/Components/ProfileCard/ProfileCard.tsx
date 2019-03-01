import * as React from 'react';
import './ProfileCard.css';

require('typeface-sarabun');
const editIcon = require('../../Graphics/Edit.png');
const profilePic = require('../../Graphics/ProfilePic.png');

interface State {
    title?: string;
    description?: string;
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
            title: 'DJ Acorn',
            description: 'top 40 pop entusiast, but genre-curious, host of ctrl+f yourself, every wed 12pm',
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
        this.setState({
            title: this.state.title,
            description: this.state.description,
            name: this.state.name,
            email: this.state.email,
            edittable: true
        });
    }

    onSave = () => {
        this.setState({
            title: document.getElementById('title')!.textContent as string,
            description: document.getElementById('description')!.textContent as string,
            name: document.getElementById('name')!.textContent as string,
            email: document.getElementById('email')!.textContent as string,
            edittable: true
        });
    }

    setUnderline = () => {
        return this.state.edittable ? '0px' : '1px solid rgba(0, 0, 0, 0.4)';
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
                    <div className="info-wrapper">
                        <div className="title-text" style={{ borderBottom: this.setUnderline() }}>
                            <div id="title" contentEditable={this.state.edittable ? false : true}>
                                {this.state.title}
                            </div>
                        </div>
                        <br />
                        <div className="body-text" style={{ borderBottom: this.setUnderline() }}>
                            <div id="description" contentEditable={this.state.edittable ? false : true}>
                                {this.state.description}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="vl" />
                <div className="right-side">
                    <div className="right-col">
                        <div >full name</div>
                        <br />
                        <div >email</div>
                        <br />
                        <div >phone</div>
                    </div>
                    <div className="left-col">
                        <div style={{ borderBottom: this.setUnderline() }}>
                            <div id="name" contentEditable={this.state.edittable ? false : true}>
                                {this.state.name}
                            </div>
                        </div>
                        <br />
                        <div style={{ borderBottom: this.setUnderline() }}>
                            <div id="email" contentEditable={this.state.edittable ? false : true}>
                                {this.state.email}
                            </div>
                        </div>
                        <br />
                        <div style={{ borderBottom: this.setUnderline() }}>
                            <div contentEditable={this.state.edittable ? false : true}>
                                {this.state.phone}
                                <div className="faded">
                                    Enter Phone Number
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}