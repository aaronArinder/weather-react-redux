import React, { Component } from 'react';

export default class SearchBar extends Component {
  constructor(props) {
    super();
    this.state = { term: '' };
  }

  onInputChange(event) {
    this.setState({ term: event.target.value });
  }

  onFormSubmit(event) {
    event.preventDefault();

    //get weather info
  }

  render() {
    return (
      <form className="input-group">
        <input
          onSubmit={this.onFormSubmit}
          placeholder="Search for a 5-day forecast"
          className="form-control"
          value={this.state.term}
          onChange={event => this.onInputChange(event)}
        />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">
            Submit
          </button>
        </span>
      </form>
    );
  }
}
