import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import ItemByUserRow from './../ItemByUserRow/ItemByUserRow.js';

class ItemByUser extends Component {

    state = {
        rows: []
    }

    componentDidMount = () => {
        this.props.dispatch({
            type: 'GET_COUNT'
        })
        
        
        
        
        // axios.get('/api/shelf/count')
        // .then((response) => {
        //     this.setState({
        //         rows: response.data
        //     })
        // }).catch((error) => {
        //     console.log('error in itembyuser get request: ', error);
        // })
    }

    render() {
        console.log(this.state);
        return (
            <div>
                <h3>Items by User</h3>
                <table className="item-by-user">
                    <thead>
                        <tr><th>Number of Items</th><th>User</th></tr>
                    </thead>
                    <tbody>
                        {this.props.countReducer.map((person, i) => {
                            return <ItemByUserRow key={i} user={person.username} items={person.description}/>
                        })}
                    </tbody>
                </table>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    errors: state.errors,
    countReducer: state.countReducer
});

export default connect(mapStateToProps)(ItemByUser);