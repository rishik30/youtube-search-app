import React, { Component } from 'react'
import '../../scss/search.scss'

export default class Search extends Component {

    constructor(props) {
        super(props);

        this.state = {
            searchTerm: ''
        }
    }

    render() {
        return(
            <div className="search">
                <input
                    type="text"
                    value={this.state.searchTerm}
                    onChange={e=>this._handleInputChange(e.target.value)}
                />
            </div>
        )
    }

    _handleInputChange(searchTerm) {
        this.setState({searchTerm})
        this.props.onChange(searchTerm)
    }
}
