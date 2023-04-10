import logo from "./logo.svg";
import { Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import AppHeader from "./components/header";
import MyForm from "./components/form";
import Login from "./components/login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Search from "./components/search";
import ThankYouPage from "./components/thankyou";
import WelcomePage from "./components/welcome";

function App() {
  
  return (
    <Router>
      <div className="App">

            <header id="header">
              <AppHeader />
            </header>
          <Row>
            {/* <Col xs={2}>
              <div className="sidebar">
                <h2 className="lead mb-3">Thank You for helping us reduce the crime!</h2>
              </div>
            </Col> */}
           
            <Col xs={12}>
            <Routes>
            <Route exact path="/" element={ <WelcomePage />}/>
            <Route exact path="/form" element={ <MyForm />}/>
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
