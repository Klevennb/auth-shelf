import React, { Component } from 'react';

class ItemByUserRow extends Component {
    render() {
        // console.log(this.props.user);
        return(
            <tr>
                <td>
                    {this.props.item}
                </td>
                <td>
                    {this.props.user}
                </td>
            </tr>
        )
    }
}

export default ItemByUserRow