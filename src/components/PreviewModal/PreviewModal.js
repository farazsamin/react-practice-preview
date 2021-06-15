import React, { useState } from 'react';
import { Button, Modal, Container, Row, Col } from 'react-bootstrap';
import { MarkdownPreview } from 'react-marked-markdown'
const PreviewModal = (props) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div>
            <Button variant="primary" onClick={handleShow}>
                Preview All
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Body className="show-grid">
                    <Container>
                        <Row>
                            <Col xs={12} md={8}>
                                <div style={{ backgroundColor: 'white', height: '50vh' }} className="container">
                                    <p>Batingo11</p>
                                    <MarkdownPreview value={props.post} />
                                    <hr />
                                    <div className="row mt-3">
                                        <div className="col-md-4"> <button className="btn btn-secondary">Like</button> </div>
                                        <div className="col-md-4"> <button className="btn btn-secondary">Comment</button></div>
                                        <div className="col-md-4"> <button className="btn btn-secondary">Share</button></div>
                                    </div>
                                </div>
                            </Col>
                            <Col xs={6} md={4}>
                                <div style={{ backgroundColor: 'white', height: '50vh' }} className="container">
                                    <p>Batingo11</p>
                                    <MarkdownPreview value={props.post} />
                                    <hr />
                                    <div className="row mt-3">
                                        <div className="col-md-4"> <button className="btn btn-secondary">Like</button> </div>
                                        <div className="col-md-4"> <button className="btn btn-secondary">Comment</button></div>
                                        <div className="col-md-4"> <button className="btn btn-secondary">Share</button></div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={handleClose}>Close</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default PreviewModal;