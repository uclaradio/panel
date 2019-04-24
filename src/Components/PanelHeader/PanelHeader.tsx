import * as React from 'react';
import './PanelHeader.css';

const logo = require('../../Graphics/Logo.png');
require('typeface-sarabun');

class PanelHeader extends React.Component {
    render() {
        return (
            <div className="header-wrapper">
                <img className="logo" src={logo} />
                <div className="top-title"> Secret DJ Panel </div>
                <div className="right-wrapper">
                    <div>MANAGER PANEL</div>
                    <div>FAQ</div>
                    <div>ELROND</div>
                    <div style={{ color: 'rgba(255, 0, 0, 0.65)' }}>LOGOUT</div>
                </div>
            </div>
        );
    }
}

export default PanelHeader;
