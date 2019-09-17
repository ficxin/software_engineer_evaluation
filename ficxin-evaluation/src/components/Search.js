import React from 'react';

class SearchInput extends React.Component {
  state = {
    value: '',
  }

  handleSumbit = (ev) => {
    ev.preventDefault();

    this.props.onSubmit(this.state.value)
  }

  handleChange = (ev) => {
    const value = ev.target.value
    this.setState({
      value
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSumbit}>
        <label>Nasa Image Seach</label>
        <input
          type="text"
          onChange={this.handleChange}
        />
        <button
          type="submit"
          disabled={!this.state.value}
        >
          Go
        </button>
      </form>
    )
  }
}

class Search extends React.Component {
  state = {

  }

  render() {
    return (
      <div className="search-container">
        <SearchInput onSubmit={this.handleSumbit} />
      </div>
    )
  }
}

export default Search;
