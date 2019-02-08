import * as React from 'react';
import './SearchPanel.scss';

const searchText = 'Type here to search';

export class SearchPanel extends React.Component{
    constructor () {
        super();
        this.state = {
            term: ''
        };
        this.onSearchChange = (e) => {
            const term = e.target.value;
            this.setState({term});
            this.props.onSearchChange(term);
        }
    }
    render () {
        return <input
            className='Search-panel'
            placeholder={ searchText }
            value={this.state.term}
            onChange={this.onSearchChange}
        />
    };
}