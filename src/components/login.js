import MyButton from "./button";
import MyFormControl from "./textfield";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";
function Login() {
  return (
    <div className="login">
      <Form.Group controlId="formUploaderDetails">
        <Form.Label>Enter Your Passkey</Form.Label>
        <MyFormControl type="password" placeholder="Enter Your Passkey...." />
      </Form.Group>
      <Link to="/search">
        <MyButton variant="dark" name="Login" />
      </Link>
    </div>
  );
}
export default Login;
