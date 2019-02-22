import * as React from 'react';
import './MainInfo.css';
require('typeface-sarabun');

class MainInfo extends React.Component {
    render() {
        return (
            <div className="info-wrapper">
                <div className="title-text">
                    test1
                </div>
                <br />
                <div className="body-text">
                    test2
                </div>
            </div>
        );
    }
}

export default MainInfo;