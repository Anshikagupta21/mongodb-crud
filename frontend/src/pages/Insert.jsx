import { useState } from "react";
import { Form, Button, Container, Card, Row, Col } from "react-bootstrap";
import "../css/Insert.css";
import axios from "axios";

import BackendURL from "../utils/BackendUrl";

const Insert = () => {
  const [input, setInput] = useState({
    
    rollno: "",
    name: "",
    city: "",
    fees: ""
  });

  const handleinput = (e) => {
    const { name, value } = e.target;
    setInput((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const api = `${BackendURL}students/save`;
    const res = await axios.post(api, input);
    alert("Student added successfully!");
    setInput({ rollno: "", name: "", city: "", fees: "" });
  };

  return (
    <div className="insert-page">
      <Container>
        <Row className="justify-content-center">
          <Col md={8} lg={6}>
            <Card className="insert-card border-0">
              <h2 className="insert-title">✨ Add New Student</h2>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label>RollNO</Form.Label>
                  <Form.Control
                    type="text"
                    name="rollno"
                    value={input.rollno}
                    onChange={handleinput}
                    
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    value={input.name}
                    onChange={handleinput}
                    
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>City</Form.Label>
                  <Form.Control
                    type="text"
                    name="city"
                    value={input.city}
                    onChange={handleinput}
                    
                  />
                </Form.Group>

                <Form.Group className="mb-4">
                  <Form.Label>Fees</Form.Label>
                  <Form.Control
                   type="text"

                    name="fees"
                    value={input.fees}
                    onChange={handleinput}
                    
                    required
                  />
                </Form.Group>

                <Button type="submit" className="submit-btn">
                  ➕ Add Student
                </Button>
              </Form>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Insert;