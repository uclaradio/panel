import * as React from 'react';
import './ProfileCard.css';
import TextField from '@material-ui/core/TextField';

require('typeface-sarabun');

class ProfileCard extends React.Component {
    state = {
        name: 'DJ Acorn',
        description: 'top 40 pop entusiast, but genre-curious, host of ctrl+f yourself, every wed 12pm'
    };
    render() {
        return (
            <div className="profile-container">
                <div className="left-side">
                    <div className="profile-picture" />
                    <div className="info-wrapper">
                        <div className="title-text">
                            {this.state.name}
                        </div>
                        <br />
                        <div className="body-text">
                            {this.state.description}
                        </div>
                    </div>
                </div>
                <div className="vl" />
                <div className="right-side">
                    <div className="right-title">
                        full name
                    </div>
                    <TextField >
                        id="standard-name"
                        label="Name"
                        value={this.state.name}
                        margin="normal"
                    </TextField>
                </div>
            </div>
        );
    }
}

export default ProfileCard;