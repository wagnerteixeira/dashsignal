import React, { Component } from 'react';

class City extends Component {
    render() {
        return (
            <div key={this.props.registry}>
                <div>{this.props.registry}</div>
                <div>{this.props.city}</div>
                <div>{this.props.state}</div>
            </div>
        )
    }
}

export default City;