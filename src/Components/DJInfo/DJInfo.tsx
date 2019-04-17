import * as React from 'react';
import './DJInfo.css';

require('typeface-sarabun');

interface State { }
interface Props {
    djname?: string;
    about?: string;
    edit?: boolean;
}

class MainInfo extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
    }
    setUnderline = () => {
        return this.props.edit ? '1px solid rgba(0, 0, 0, 0)' : '1px solid rgba(0, 0, 0, 0.4)';
    }
    render() {
        return (
            <div className="info-wrapper">
                <div className="underline" style={{ borderBottom: this.setUnderline() }}>
                    <input type="text" maxLength={50} className="title-text" id="djname" defaultValue={this.props.djname} placeholder="DJ Name" disabled={this.props.edit ? true : false} />
                </div>
                <div className="underline" style={{ borderBottom: this.setUnderline() }}>
                    <textarea rows={4} maxLength={500} className="body-text" id="about" defaultValue={this.props.about} placeholder="About Me" disabled={this.props.edit ? true : false} />
                </div>
            </div>
        );
    }
}

export default MainInfo;