import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import {useNavigate} from "react-router-dom"
  
export default function Home() {
  const navigate = useNavigate();
  return (
    <div>


      <Container className="d-flex justify-content-center">
        <h1 className="mx-3"> Products</h1>
        <Button onClick={()=>navigate("/additem")} variant="success">Add + </Button>
      </Container>
    </div>
  );
}