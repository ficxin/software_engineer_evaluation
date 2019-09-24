import React, { Component } from 'react'
import { Link } from "react-router-dom";

class Login extends Component {
  state = {
    email: '',
    password: ''
  }

  handleSumbit = (ev) => {
    ev.preventDefault();
  }

  handleChange = (ev) => {
    const id = ev.target.id
    const value = ev.target.value
    this.setState(({
      [id]: value
    }))
  }

  render() {
    return (
      <div className="login-form-container">
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="email">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            autoComplete="off"
            placeholder="email"
            value={this.state.email}
            onChange={this.handleChange}
          />
          <label htmlFor="password">
            Password
          </label>
          <input
            type="password"
            id="password"
            autoComplete="off"
            placeholder="password"
            value={this.state.password}
            onChange={this.handleChange}
          />

          <Link to="/search/">
            <button
              type="submit"
              disabled={!this.state.email || !this.state.password}
            >
              Sign In
            </button>
          </Link>
        </form>
      </div>
    )
  }
}

export default Login;
