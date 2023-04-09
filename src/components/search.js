import MyButton from "./button";
import MyFormControl from "./textfield";
import { Form } from "react-bootstrap";
import React, { useState } from "react";
function Search() {
  const [searchText, setSearchText] = useState("");

  const handleSearch = (event) => {
    event.preventDefault();
    // Perform search action with searchText
  };
  return (

    <div className="login">
      <h1 className="mb-4">Search Our Site</h1>
      <Form.Group controlId="formUploaderDetails">
        <Form.Label>Search Evidences</Form.Label>
        <MyFormControl type="text" placeholder="Enter Evidence Name...." />
      </Form.Group>
      <MyButton type="submit" variant="dark" name="Search" />

    </div>
  );
}
export default Search;
