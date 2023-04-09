import logo from "./logo.svg";
import { Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import AppHeader from "./components/header";
import MyForm from "./components/form";
import Login from "./components/login";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Search from "./components/search";
import ThankYouPage from "./components/thankyou";

function App() {
  return (
    <Router>
      
        <div className="App">
          <Row>
            <header id="header">
              <AppHeader />
            </header>
          </Row>
          <Row>
            <Col xs={2}>
              <div className="sidebar">
                <h2>Thank You for helping us reduce the crime!</h2>
              </div>
            </Col>
           
            <Col xs={10}>
            <Routes>
            <Route exact path="/" element={ <MyForm />}/>
            <Route exact path="/login" element={ <Login />}/>
            <Route exact path="/search" element={<Search />}/>
            <Route exact path="/thankyou" element={<ThankYouPage />}/>
              </Routes>
            </Col>
            
          </Row>

        </div>
      
    </Router>
  );
}

export default App;
