import React, { Component } from "react";

export default class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = { term: '' };
    }

    onInputChange(term) {
        this.setState({ term });
    }

    onFormSubmit(event){
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.onFormSubmit} className="input-group">
                <input
                    placeholder="Get a five-day forecast"
                    value={this.state.term}
                    onChange={event => this.onInputChange(event.target.value)}
                    className="form-control" />
                <span className="input-group-btn">
                    <button className="btn btn-secondary" type="submit">Submit</button>
                </span>
            </form>
        )
    }
}