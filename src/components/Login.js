import React, { useState } from 'react';
import { AUTH_TOKEN } from '../constants';
import { useMutation } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import history from '../services/history';

const SIGNUP_MUTATION = gql`
  mutation SignupMutation($email: String!, $password: String!, $name: String!) {
    signup(email: $email, password: $password, name: $name) {
      token
    }
  }
`;

const LOGIN_MUTATION = gql`
  mutation LoginMutation($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
    }
  }
`;

export default function Login() {
  const [login, setLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const [sign, { data }] = useMutation(
    login ? LOGIN_MUTATION : SIGNUP_MUTATION
  );

  if (data) {
    console.log(data);
    localStorage.setItem(AUTH_TOKEN, data.signup.token);
    history.push('/');
  }

  async function _confirm() {
    if (email !== '' && password !== '') {
      if (!login && name !== '') {
        sign({ variables: { email, password, name } });
      }
    }
  }

  return (
    <div>
      <h4 className="mv3">{login ? 'Login' : 'Sign Up'}</h4>
      <div className="flex flex-column">
        {!login && (
          <input
            value={name}
            onChange={e => setName(e.target.value)}
            type="text"
            placeholder="Your name"
          />
        )}
        <input
          value={email}
          onChange={e => setEmail(e.target.value)}
          type="text"
          placeholder="Your email address"
        />
        <input
          value={password}
          onChange={e => setPassword(e.target.value)}
          type="password"
          placeholder="Choose a safe password"
        />
      </div>
      <div className="flex mt3">
        <div className="pointer mr2 button" onClick={() => _confirm()}>
          {login ? 'login' : 'create account'}
        </div>
        <div className="pointer button" onClick={() => setLogin(!login)}>
          {login ? 'need to create an account?' : 'already have an account?'}
        </div>
      </div>
    </div>
  );
}
