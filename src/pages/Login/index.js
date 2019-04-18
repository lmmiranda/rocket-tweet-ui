import React, { Component } from "react";

import twitterLogo from "../../assets/twitter.svg";
import "./styles.css";

export default class Login extends Component {
  state = {
    username: ""
  };

  handleInputChange = event => {
    this.setState({ username: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { username } = this.state;

    if (!username.length) return;

    localStorage.setItem("@rocket-tweet:username", username);
    this.props.history.push("/timeline");
  };

  render() {
    return (
      <div className="login-wrapper">
        <img src={twitterLogo} alt="Rocket-Tweet" />
        <form onSubmit={this.handleSubmit}>
          <input
            value={this.state.username}
            onChange={this.handleInputChange}
            placeholder="Nome de usuário"
          />
          <button type="submit">Entrar</button>
        </form>
      </div>
    );
  }
}
