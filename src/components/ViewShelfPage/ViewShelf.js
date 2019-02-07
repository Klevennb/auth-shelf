import React, { Component } from 'react';
import { connect } from 'react-redux';

class ViewShelf extends Component {
    populateTable = () => {
        return this.props.reduxStore.
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
