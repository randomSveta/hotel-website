import React from 'react';
import { Container, Row, Col } from 'reactstrap';

export default function Gallery(props) {
    return (
        <Container>
            <Row id="row-welcome" className="justify-content-center align-items-center">
                <Col className="text-center">
                    Gallery
                </Col>
            </Row>
        </Container>
    )
};
