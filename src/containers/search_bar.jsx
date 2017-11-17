import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchWeather } from "../actions/index"

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = { term: '' };
    }

    onInputChange(term) {
        this.setState({ term });
    }

    onFormSubmit(event) {
        event.preventDefault();

        console.log("props", this.props);
        this.props.fetchWeather(this.state.term);
        this.setState({ term: "" });
    }

    render() {
        return (
            <form onSubmit={this.onFormSubmit.bind(this)} className="input-group">
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

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchWeather }, dispatch);
}


export default connect(null, mapDispatchToProps)(SearchBar);