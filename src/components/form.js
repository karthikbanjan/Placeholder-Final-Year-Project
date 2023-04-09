import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import MyButton from "./button";
import MyTextField from "./textfield";
import MyFormControl from "./textfield";
import { Link } from "react-router-dom";

function MyForm() {
  const [timeRange, setTimeRange] = useState("");
  const [place, setPlace] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Submit form data to server or perform any necessary actions
  };

  return (
    <>
      <div className="dark-form">
        <h1>Welcome To Evidence Collection</h1>
        <h4>Please Fill Out The Form Below To Upload Evidence</h4>

        <div
          style={{
            border: "5px solid black",
            marginTop: "20px",
            marginLeft: "200px",
            marginRight: "200px",
            marginBottom: "10px",
            padding: "20px",
            borderRadius: "5px",
          }}
        >
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formTimeRange">
              <Form.Label>
                Time Range<span style={{ color: "red" }}>*</span>
              </Form.Label>
              <Form.Control
                type="text"
                required
                value={timeRange}
                onChange={(e) => setTimeRange(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formPlace">
              <Form.Label>
                Place<span style={{ color: "red" }}>*</span>
              </Form.Label>
              <Form.Control
                type="text"
                required
                value={place}
                onChange={(e) => setPlace(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formDescription">
              <Form.Label>
                Description<span style={{ color: "red" }}>*</span>
              </Form.Label>
              <Form.Control
                as="textarea"
                required
                rows={3}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formFile">
              <Form.Label>
                Upload Evidence<span style={{ color: "red" }}>*</span>
              </Form.Label>
              <Form.Control
                type="file"
                required
                onChange={(e) => setFile(e.target.files[0])}
              />
            </Form.Group>

            <Form.Group controlId="formUploaderDetails">
              <Form.Label>Details of Uploader (Optional)</Form.Label>
              <MyFormControl type="text" placeholder="Name Of Uploader" />
              <MyFormControl type="text" placeholder="Address" />
              <MyFormControl type="phone" placeholder="Contact Number" />
              <MyFormControl type="email" placeholder="Email Id" />
            </Form.Group>
          </Form>
        </div>
        <Link to="/thankyou">
        <MyButton  name="Submit" type="submit" variant="dark" />
        </Link>
      </div>
    </>
  );
}

export default MyForm;
