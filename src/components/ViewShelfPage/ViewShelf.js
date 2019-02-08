import React, { Component } from 'react';
import { connect } from 'react-redux';
import TableItems from './TableItems.js';

class ViewShelf extends Component {

    componentDidMount(){
        this.getItems();
    }

    getItems(){
        const action = { type: 'GET_ITEMS' };
        this.props.dispatch(action);
    };

    // deleteItem(){
    //     console.log(this.props.response.description);
        
    //     // const action = {type: 'DELETE_ITEM', payload: this.props.response.description}
        
    // }

    populateTable = () => {
        console.log('!!!!!!', this.props.reduxStore.shelfReducer);
        return this.props.reduxStore.shelfReducer.map((response, i) => {
            return  <TableItems response={response} key={i}/>

        })

    }

    render() {
        return (
            <div>
               <table>
                   <thead>
                       <tr>
                           <th>Description</th>
                        <th>Picture</th>
                       </tr>
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
