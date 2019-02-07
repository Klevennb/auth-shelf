import React, { Component } from 'react';
import { connect } from 'react-redux';

class ViewShelf extends Component {
    populateTable = () => {
        // return this.props.reduxStore.
        return <h1>hi</h1>
    }

    render() {
        return (
            <div>
               <table>
                   <thead>
                       <th>Description</th>
                       <th>Picture</th>
                       {this.populateTable()}
                   </thead>
               </table>
            </div>
        );
    }
}

const mapReduxStoreToProps = (reduxStore) => ({
    reduxStore: reduxStore
})

export default connect(mapReduxStoreToProps)(ViewShelf);
