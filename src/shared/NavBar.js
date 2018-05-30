import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';

const languages = [
  {
    name: 'All',
    param: 'all'
  },
  {
    name: 'JavaScript',
    param: 'javascript'
  },
  {
    name: 'Ruby',
    param: 'ruby'
  },
  {
    name: 'Python',
    param: 'python'
  },
  {
    name: 'Java',
    param: 'java'
  },
];

export default class NavBar extends Component {
  render() {
    return (
      <ul>
        {languages.map(({ name, param }) => (
          <li key={param}>
            <NavLink activeStyle={{ fontWeight: 'bold' }} to={`/popular/${param}`}>
              {name}
            </NavLink>
          </li>
        ))}
      </ul>
    );
  }
}

