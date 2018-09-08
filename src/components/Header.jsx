import React, { Component }     from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

import logoFull from "../logo_full.png";

export default class Header extends Component {

    render() {
        return (
            <Navbar id="header" className="zenHeader" fluid={false}>
                <Navbar.Header>
                    <Navbar.Brand>
                        <img src={logoFull} alt="logo"/>
                    </Navbar.Brand>
                </Navbar.Header>
                <Nav pullRight>
                    <NavItem href="https://github.com/anonymousbitcoin/anonpaperwallet" className="nav-item headerLeftOption">SOURCE</NavItem>
                    <NavItem href="https://explorer.anonfork.io/" className="nav-item headerLeftOption">EXPLORER</NavItem>
                </Nav>
            </Navbar>
        );
    }
}
