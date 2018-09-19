import React, { Component } from 'react';
import { Grid, Row, Col }   from 'react-bootstrap';

import website from "../website.png";
import github from "../github.png";
import twitter from "../twitter.png";
import discord from "../discord.png";
import reddit from "../reddit.png";

export default class Footer extends Component {
    render() {
        return (
            <Grid fluid={true} id="footer">
                <br />
                <div className="container">
                <Row>
                    <Col xs={12} className="footerSocialWrap">
                        <ul className="footerSocial">
                            <li>
                                <a href="https://www.anonfork.io/">
                                    <img src={website} alt="website"/>
                                </a>
                            </li>
                            <li>
                                <a href="https://github.com/anonymousbitcoin">
                                    <img src={github} alt="github"/>
                                </a>
                            </li>
                            <li>
                                <a href="https://twitter.com/ANON_WeAreANON">
                                    <img src={twitter} alt="twitter"/>
                                </a>
                            </li>
                            <li>
                                <a href="https://discord.gg/9XQMspU">
                                    <img src={discord} alt="discord"/>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.reddit.com/r/AnonymousBitcoin/">
                                    <img src={reddit} alt="reddit"/>
                                </a>
                            </li>
                        </ul>
                    </Col>
                    <Col xs={12}>

                    </Col>
                </Row>
                </div>
                <div>
                <p className="footerCopyright">
                    <a href="https://github.com/anonymousbitcoin/anonpaperwallet" target="_blank" rel="noopener noreferrer">JavaScript Client-Side ANON Wallet Generator</a>
                </p>
                <p className="footerCopyright">
                	For vulnerability disclosure, contact the developers at<a href="https://www.anonfork.io/disclosure" target="_blank" rel="noopener noreferrer">anonfork.io/disclosure</a>
                </p>
				<p className="footerCopyright">
                    Please report any issues to the development team at our<a href="https://github.com/anonymousbitcoin/anonpaperwallet/issues" target="_blank" rel="noopener noreferrer">github issues page</a>
                </p>
                </div>
            </Grid>
        );
    }
}
