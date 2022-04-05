import React, {useState} from 'react';
import {Card, Col, Container, Form, Row} from "react-bootstrap";
import NavbarC from '../../components/navbarC/NavbarC';
import Course from "./Course";
import './Courses.css';
import MainCourses from "./MainCourses";

function Courses() {
    const [courses] = useState([
        1, 2, 3, 4, 5, 6, 7, 8
    ]);
    return (
        <>
        <NavbarC />
            <Container>
                <Row>
                    <p className={"my-3 my-md-5"}>Asosiy <span className={"mx-2 fs-4 fw-light"}>|</span> Kurslar</p>
                    <MainCourses/>
                    <Col md={"4"} lg={"3"} className={"p-2"}>
                        <Card className={"p-2 border-0 shadow-sm round-custom sticky-top card-filter-courses"}>
                            <Card.Body>
                                <p className={"fs-5 fw-bold"}>Saralash</p>
                                <Form className={"my-4"}>
                                    <Form.Group className={"my-3"}>
                                        <Form.Label>Yo'nalish</Form.Label>
                                        <select className="form-select round-custom-md border-0 bg-custom p-3"
                                                aria-label="Default select example">
                                            <option value="0">Birini tanlang</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </select>
                                    </Form.Group>
                                    <Form.Group className={"my-3"}>
                                        <Form.Label>Kurs</Form.Label>
                                        <select className="form-select round-custom-md border-0 bg-custom p-3"
                                                aria-label="Default select example">
                                            <option value="0">Birini tanlang</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </select>
                                    </Form.Group>
                                </Form>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={"8"} lg={"9"} className={"py-2 px-4"}>
                        <Row>
                            {
                                courses.map(course => {
                                    return (
                                        <Col className={"px-4 pb-4"} md={"12"} key={course}>
                                            <Course/>
                                        </Col>
                                    )
                                })
                            }
                        </Row>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Courses;