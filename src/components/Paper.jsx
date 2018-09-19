import React, { Component } from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import { QRCode }           from 'react-qr-svg';
import zclassicjs           from 'anonjs';


class Paper extends Component {
    constructor(props) {
        super(props);
        this.state = {
            type: 'T',
            priv: '',
            wif: '',
            addr: ''
        };
    }

    genAddress() {
        const priv      = zclassicjs.address
            .mkPrivKey(this.props.entropy + new Date().getTime());
        const privWIF   = zclassicjs.address.privKeyToWIF(priv, true);
        const pubKey    = zclassicjs.address.privKeyToPubKey(priv, true);
        const znAddr    = zclassicjs.address.pubKeyToAddr(pubKey);

        this.setState({
            priv: priv,
            wif: privWIF,
            addr: znAddr
        });
    }

    render() {
        return (
          <Row id="Paper">
            <Col xs={12}>
                <hr />
                <Row className="r1">
                    <Col xs={12}>
                        <Button onClick={() => this.genAddress()}>
                            Generate New Address
                        </Button>
                    </Col>
                </Row>
                {/* <Row className="r1">
                    <Col xs={12}>
                        <Button onClick={window.print}>
                            Print
                        </Button>
                    </Col>
                </Row> */}
                <hr />
                {this.state.addr ? (
                    <Row className="r2">
                        <Col xs={12} className="max-width">

                            <h2>Overview</h2>

                            <div id="art-area">


                                <span id="addr-QR">
                                    <QRCode
                                        bgColor="#FFFFFF"
                                        fgColor="#000000"
                                        level="L"
                                        style={{ width: 96 }}
                                        value={this.state.addr}
                                    />
                                </span>

                                <b id="addr-str1">
                                    {this.state.addr}
                                </b>
                                <b id="addr-str2">
                                    {this.state.addr}
                                </b>

                                <span id="wif-QR">
                                    <QRCode
                                        bgColor="#FFFFFF"
                                        fgColor="#000000"
                                        level="L"
                                        style={{ width: 96 }}
                                        value={this.state.wif}
                                    />
                                </span>

                                <b id="wif-str1">
                                    {this.state.wif}
                                </b>
                                <b id="wif-str2">
                                    {this.state.wif}
                                </b>

                            </div>

                        </Col>
                    </Row>
                ) : (
                    <Row className="r2 no-padding"></Row>
                )}
                <hr />
                <Row className="r3">
                    <Col>
                        <p>
                          <b>A Paper Wallet</b> is a piece of paper containing a public address and a private key. It allows you to store some ANON offline.
                        </p>
                        <p>
                          These kind of wallets are vulnerable to loss and theft. You should keep it safe like jewels or cash. Therefore it is recommended either to have a backup or to generate it only for temporary use.
                        </p>
                        <p>
                          <b>When Printing:</b> Print this wallet with Chrome for better image quality. If printing does not come out correctly, screen shot the wallet and print it that way.
                        </p>
                    </Col>
                </Row>
            </Col>
          </Row>
        );
    }
}

export default Paper;
