import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { loginAction } from '../redux/actions';

import '../css/LoginPage.css';

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ value, name }) {
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { username } = this.state;
    const { dispatchLogin } = this.props;
    return (
      <form className="login-form">
        <label htmlFor="username" className="login-label">
          Insira um nome de usuário:
          <input
            type="text"
            name="username"
            id="username"
            value={username}
            placeholder="Username"
            maxLength="30"
            onChange={(e) => this.handleChange(e.target)}
          />
        </label>
        <Link
          to="/products"
          onClick={(e) => {
            if (!username) {
              e.preventDefault();
            }
            dispatchLogin(username);
          }}
          className="login-btn"
        >
          Entrar
        </Link>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  dispatchLogin: (username) => dispatch(loginAction(username)),
});

export default connect(null, mapDispatchToProps)(LoginPage);
