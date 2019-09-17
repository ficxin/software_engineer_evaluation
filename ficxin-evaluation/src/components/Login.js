import React, { Component } from 'react'

class Login extends Component {
  state = {
    email: '',
    password: ''
  }

  handleSumbit = (ev) => {
    ev.preventDefault();
    alert(ev.target)
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
            type="text"
            id="email"
            placeholder="email"
            value={this.state.email}
            onChange={this.handleChange}
          />
          <label htmlFor="password">
            Password
          </label>
          <input
            type="text"
            id="password"
            placeholder="password"
            value={this.state.password}
            onChange={this.handleChange}
          />
          <button
            type="submit"
            disabled={!this.state.email || !this.state.password}
          >
            Sign In
          </button>
        </form>
      </div>
    )
  }
}

export default Login;
