import React from "react";
import { BrowserRouter as Router, Link } from 'react-router-dom';
import {Form, Button} from 'react-bootstrap';
import "./login.css";
import "../App.css";

function register(){

    return(
            <div className="app_page_login">
                <Form className="FormGrp">

                    <Form.Label className="FormLabel">SIGN UP</Form.Label>
                        <div className="col-6">
                        <h3 className="formHeader">Salutation</h3>
                        <Form.Control className="box" as="select">
                            <option>Miss</option>
                            <option>Ms</option>
                            <option>Mrs</option>
                            <option>Mdm</option>
                            <option>Mr</option>
                            <option>Prof.</option>
                            <option>Dr.</option>
                        </Form.Control>
                        <h3 className="formHeader">First Name</h3>
                        <Form.Control className='box' type="text" placeholder="First Name" />
                        <h3 className="formHeader">Last Name</h3>
                        <Form.Control className='box' type="text" placeholder="Last Name" />
                        <h3 className="formHeader">Email</h3>
                        <Form.Control className='box' type="email" placeholder="Email"/>
                        <h3 className="formHeader">Mobile Phone</h3>
                        <Form.Control className='box' type="email" placeholder="Mobile Phone" />
                        <h3 className="formHeader">Password</h3>
                        <Form.Control className='box' type="password" placeholder="Password"/>
                        </div>

                    <Link to="/questionnaire"><Button type="submit" className="buttons">SIGN UP</Button></Link>

                    <Form.Label className="register">
                        Already have an account? Click<Link to="/login"> Here</Link>
                    </Form.Label>
                </Form>
            </div>
    )
}

export default register;