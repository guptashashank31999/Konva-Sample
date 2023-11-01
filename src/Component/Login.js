import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "../App.css"
import {useNavigate} from "react-router-dom"
import LogoWhite from "../Images/Velocis_white_logo.png"


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if(!email || !password ){
      alert("data needed")
      console.log("Please fill all fields");
    
    }else{
      console.log("emai",email, password)
      localStorage.setItem("email",email);
      localStorage.setItem("password",password)
      
    navigate("/datas")
      
    }
  }


  return (
    <div className="bg-img position-relative">
        <div className="login-box">
          <Form>
          <div className="text-center mb-3">
          <img
              src={LogoWhite}
              className="img-fluid my-4 w-50"
              style={{ marginLeft: "-5px" }}
              alt="Responsive image"
            />
          </div>
            
            <Form.Group className="mb-4" controlId="formBasicEmail">
              <Form.Control
                type="email"
                placeholder="Enter email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-4" controlId="formBasicPassword">
              <Form.Control
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            <Button
              variant="primary"
              type="submit"
              onClick={(e) => handleSubmit(e)}
            >
              Submit
            </Button>
          </Form>
        </div>
    </div>
  );
};

export default Login;
