import React from 'react';
import { getImages } from '../utils/api';
import Modal from './Modal';

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

function SearchResult({data, imageUrl, toggleModal}) {
  const { title, date_created } = data[0];
  const date = new Date(date_created).toUTCString();
  
  return (
    <div className="search-result">
      <section onClick={toggleModal}>
        <img
          className='image-preview'
          src={imageUrl}
          alt={title}
        />
        <ul>
          <li>{title}</li>
          <li>{date}</li>
        </ul>
      </section>
    </div>
  )
}

function Image({ imageUrl, toggleModal }) {
  return (
    <div className="modal">
      <section>
        <button onClick={toggleModal}>
          &#10005;
        </button>
        <img
          className='image-bg'
          src={imageUrl}
          alt="modal"
        />
      </section>
    </div>
  );
}

class Search extends React.Component {
  state = {
    data: null,
    href: null,
    error: null,
    modal: false,
  }

  handleSumbit = (value) => {
    getImages(value)
      .then(({ items }) => {
        const { data, links } = items[0]
        const { href } = links[0];

        this.setState({
          data,
          href,
          error: null,
        })
      })
      .catch(() => {
        this.setState({
          data: null,
          href: null,
          error: `There is no data for this search term at the moment.`
        })
      })
  }

  handleModal = () => {
    this.setState(({ modal }) => ({
      modal: !modal,
    }))
  }

  render() {
    const { data, href, modal, error } = this.state;

    return (
      <React.Fragment>
        <div className="search-container">
          <SearchInput onSubmit={this.handleSumbit} />
          {error && <p>{error}</p>}

          {data &&
            <SearchResult 
              data={data} 
              imageUrl={href} 
              toggleModal={this.handleModal} 
            />
          }
        </div>
        {modal && 
          <Modal>
            <Image 
              imageUrl={href}
              toggleModal={this.handleModal}
            />
          </Modal>
        }
      </React.Fragment>
    )
  }
}

export default Search;
