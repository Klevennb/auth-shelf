import React, { Component } from 'react';
import { connect } from 'react-redux';

class TableItems extends Component {


    deleteItem = () => {
        const action = { type: 'DELETE_ITEM', payload: this.props.response.id};
        this.props.dispatch(action);

    }

 
    render() {
        return (
            <tr>
                <td>{this.props.response.description}</td>
                <td><img alt= 'placeholder' src={this.props.response.image_url}></img></td>
                <td><button onClick={this.deleteItem}>Delete</button></td>
            </tr>
        );
    }
}

const mapReduxStoreToProps = (reduxStore) => ({
    reduxStore: reduxStore
})

export default connect(mapReduxStoreToProps)(TableItems);
