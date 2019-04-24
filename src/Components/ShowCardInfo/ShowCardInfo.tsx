import * as React from 'react';
import './ShowCardInfo.css';

require('typeface-sarabun');

interface State { }
interface Props {
    id: number;
    title: string;
    description: string;
    edit: boolean;
    checkbox: boolean;
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
                    <input type="text" maxLength={50} className="title-text" id={'title' + this.props.id} defaultValue={this.props.title} placeholder="Show Name" disabled={this.props.edit ? true : false} />
                </div>
                <div className="underline" style={{ borderBottom: this.setUnderline() }}>
                    <textarea rows={4} maxLength={500} className="body-text" id={'description' + this.props.id} defaultValue={this.props.description} placeholder="Description" disabled={this.props.edit ? true : false} />
                </div>
                <div className="show-public-toggle">
                    <input className="checkbox" type="checkbox" />
                    MAKE SHOW PUBLIC
                </div>
            </div>
        );
    }
}

export default MainInfo;