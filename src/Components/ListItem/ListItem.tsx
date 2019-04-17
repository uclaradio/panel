import * as React from 'react';
import './ListItem.css';

require('typeface-sarabun');

interface State { }
interface Props {
    title?: string;
    id?: string;
    value?: string;
    placeholder?: string;
    edit?: boolean;
}

class ListItem extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
    }
    setUnderline = () => {
        return this.props.edit ? '1px solid rgba(0, 0, 0, 0)' : '1px solid rgba(0, 0, 0, 0.4)';
    }
    render() {
        return (
            <tr>
                <td className="left">{this.props.title}</td>
                <td >
                    <div className="underlined" style={{ borderBottom: this.setUnderline() }}>
                        <input id={this.props.id} type="text" defaultValue={this.props.value} placeholder={this.props.placeholder} disabled={this.props.edit ? true : false} />
                    </div>
                </td>
            </tr>
        );
    }
}

export default ListItem;