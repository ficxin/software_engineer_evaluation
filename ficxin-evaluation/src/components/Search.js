import React from 'react';
import { getImages } from '../utils/api';

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

function SearchResult({data, imageUrl}) {
  const { title, date_created } = data[0];
  const date = new Date(date_created).toUTCString();
  
  return (
    <div className="search-result">
      <section>
        <img
          className='image-preview'
          src={imageUrl}
        />
        <ul>
          <li>{title}</li>
          <li>{date}</li>
        </ul>
      </section>
    </div>
  )
}

class Search extends React.Component {
  state = {
    data: '',
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
    const { data, href } = this.state;

    return (
      <div className="search-container">
        <SearchInput onSubmit={this.handleSumbit} />
        {data &&
          <SearchResult data={data} imageUrl={href} />
        }
      </div>
    )
  }
}

export default Search;
