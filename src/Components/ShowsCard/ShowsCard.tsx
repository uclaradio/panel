import * as React from 'react';
import './ShowsCard.css';

require('typeface-sarabun');
const editIcon = require('../../Graphics/Edit.png');
const showPic = require('../../Graphics/ShowPic.png');

interface State {
    title?: string;
    description?: string;
    djs?: string;
    time?: string;
    genre?: string;
    facebook?: string;
    tumblr?: string;
    soundcloud?: string;
    mixcloud?: string;
    edittable?: boolean;
}
interface Props { }

const d = 'On air conversations with strangers maybe listen';

export default class ShowsCard extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            title: 'ctrl+f yourself',
            description: d + ' to some of their music too. I’ll be nervous the entire hour.',
            djs: 'Haejin Jo',
            time: 'Wednesday 12pm',
            genre: 'podcast, talk, slice-of-life',
            facebook: 'https://www.facebook.com/uclaradio.ctrlfyourself/',
            tumblr: '',
            soundcloud: 'https://soundcloud.com/ctrlfyourself',
            mixcloud: '',
            edittable: true
        };
    }

    onEdit = () => {
        this.setState({ edittable: false });
    }

    onCancel = () => {
        this.setState({ edittable: true });
    }

    onSave = () => {
        this.setState({ edittable: true });
    }

    setUnderline = () => {
        return this.state.edittable ? '0px' : '1px solid rgba(0, 0, 0, 0.4)';
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
                    <div className="info-wrapper">
                        <div className="title-text" style={{ borderBottom: this.setUnderline() }}>
                            <div contentEditable={this.state.edittable ? false : true}>
                                {this.state.title}
                            </div>
                        </div>
                        <br />
                        <div className="body-text" style={{ borderBottom: this.setUnderline() }}>
                            <div contentEditable={this.state.edittable ? false : true}>
                                {this.state.description}
                            </div>
                        </div>
                        <br />
                        <div className="show-public-toggle">
                            <input type="checkbox" />
                            MAKE SHOW PUBLIC
                        </div>
                    </div>
                </div>
                <div className="vl" />
                <div className="right-side">
                    <div className="right-col">
                        <div >DJs</div>
                        <br />
                        <div >time</div>
                        <br />
                        <div >genre</div>
                        <br />
                        <div >facebook</div>
                        <br />
                        <div >soundcloud</div>
                        <br />
                        <div >tumblr</div>
                        <br />
                        <div >mixcloud</div>
                    </div>
                    <div className="left-col">
                        <div style={{ borderBottom: this.setUnderline() }}>
                            <div contentEditable={this.state.edittable ? false : true}>
                                {this.state.djs}
                            </div>
                        </div>
                        <br />
                        <div style={{ borderBottom: this.setUnderline() }}>
                            <div contentEditable={this.state.edittable ? false : true}>
                                {this.state.time}
                            </div>
                        </div>
                        <br />
                        <div style={{ borderBottom: this.setUnderline() }}>
                            <div contentEditable={this.state.edittable ? false : true}>
                                {this.state.genre}
                            </div>
                        </div>
                        <br />
                        <div style={{ borderBottom: this.setUnderline() }}>
                            <div contentEditable={this.state.edittable ? false : true}>
                                {this.state.facebook}
                            </div>
                        </div>
                        <br />
                        <div style={{ borderBottom: this.setUnderline() }}>
                            <div contentEditable={this.state.edittable ? false : true}>
                                {this.state.soundcloud}
                            </div>
                        </div>
                        <br />
                        <div style={{ borderBottom: this.setUnderline() }}>
                            <div contentEditable={this.state.edittable ? false : true}>
                                {this.state.tumblr}
                                <div className="faded">
                                    http://yourshow.tumblr.com
                                </div>
                            </div>
                        </div>
                        <br />
                        <div style={{ borderBottom: this.setUnderline() }}>
                            <div contentEditable={this.state.edittable ? false : true}>
                                {this.state.mixcloud}
                                <div className="faded">
                                    https://www.mixcloud.com/yourshow
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}