import React from "react";
import { Col, Container, Row, Footer } from "mdbreact";

class FooterPage extends React.Component {
    render() {
        return (
            <Footer color="blue" className="font-small pt-4 mt-4 " style={{ position: 'absolute', width: '100%' }}>
                <Container fluid className="text-center">
                    <Row>
                        <Col md="4">
                            <h5 className="title">Recent Posts</h5>
                            <p>
                                Here
      </p>
                        </Col>
                        <Col md="3">
                            <h5 className="title">About</h5>
                            <ul>
                                <li className="list-unstyled">
                                    <a href="#!">Link 1</a>
                                </li>
                                <li className="list-unstyled">
                                    <a href="#!">Link 2</a>
                                </li>
                                <li className="list-unstyled">
                                    <a href="#!">Link 3</a>
                                </li>
                                <li className="list-unstyled">
                                    <a href="#!">Link 4</a>
                                </li>
                            </ul>
                        </Col>
                        <Col md="3">
                            <h5 className="title">Tags</h5>
                            <ul>
                                <li className="list-unstyled">
                                    <a href="#!">Link 1</a>
                                </li>
                                <li className="list-unstyled">
                                    <a href="#!">Link 2</a>
                                </li>
                                <li className="list-unstyled">
                                    <a href="#!">Link 3</a>
                                </li>
                                <li className="list-unstyled">
                                    <a href="#!">Link 4</a>
                                </li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
                <div className="footer-copyright py-3">
                    <Container fluid>
                        &copy; {new Date().getFullYear()} Copyright:{" "}
                        <a href="https://"> BrandLab </a>
                    </Container>
                </div>
            </Footer>
        );
    }
}

export default FooterPage;