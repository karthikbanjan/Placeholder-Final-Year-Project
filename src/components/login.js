import MyButton from "./button";
import MyFormControl from "./textfield";
import { Form, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
function Login() {
  return (
    <Row >
      <Col xs={2} className="sidebar">
        
          <h2 className="lead mb-3">
            Thank You for helping us reduce the crime!
          </h2>
       
      </Col>
      <Col xs={10} className="login-container">
        <div className="login">
          <h2 className="lead mb-2">Welcome, Captain !</h2>
          <Form.Group controlId="formUploaderDetails">
            <Form.Label>Enter Your Passkey</Form.Label>
            <MyFormControl
              type="password"
              placeholder="Enter Your Passkey...."
            />
          </Form.Group>
          <Link to="/search">
            <MyButton variant="dark" name="Login" />
          </Link>
        </div>
      </Col>
    </Row>
  );
}
export default Login;
