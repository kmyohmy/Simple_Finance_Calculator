import React from 'react';
import ReactDOM from 'react-dom';
import { Link, NavLink} from 'react-router-dom';

const Header = () => (
    <header>
    <h1>Finance Manager</h1>
        <NavLink to="/" activeClassName="is-active" exact={true}>MAIN</NavLink>
        <NavLink to="/create" activeClassName="is-active">CREATE NEW EXPENSE</NavLink>
        <NavLink to="/help" activeClassName="is-active">HELP PAGE</NavLink>
    </header>
);
export default Header;