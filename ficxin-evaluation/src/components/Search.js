import React from 'react';
import { getImages } from '../utils/api'

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
    data: '',
    modal: false
  }

  handleSumbit = (value) => {
    getImages(value)
      .then(({ items }) => {
        console.log(items);
        const { data, links } = items[0]
        const { href } = links[0];

        this.setState({
          data,
          href
        })
      })
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
