import React, { Component } from 'react';
import { connect } from 'react-redux';

class AddToShelf extends Component {
    state = {
        description: null,
        image_url: null,
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.dispatch({ type: "ADD_TO_SHELF", payload: this.state })
    }

    handleChange = (event) => {
        this.setState({ [event.target.id]: event.target.value })
    }

    render() {
        console.log(this.state);

        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor='description'>Item Description</label>
                    <input type='text'
                        required
                        id='description'
                        value={this.state.description === null ? '' : this.state.description}
                        onChange={this.handleChange} />
                    <br />
                    <label htmlFor='image_url'>Item Image URL</label>
                    <input type='url'
                        required
                        id='image_url'
                        value={this.state.image_url === null ? '' : this.state.image_url}
                        onChange={this.handleChange} />
                    <br />
                    <button type='submit'>Add To Shelf</button>
                </form>
            </div>
        )
    }
}

export default connect()(AddToShelf);