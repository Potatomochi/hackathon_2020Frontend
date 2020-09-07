import React from "react";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import {Form, Button} from 'react-bootstrap';
import "./login.css"
import "../App.css"

function login(){

    return(
                <div className="app_page_login">
                    <Form className="FormGrp">

                        <Form.Label className="FormLabel">LOG IN</Form.Label>


                            <div className="col-6">
                            <h1 className="formHeader">Email</h1><Form.Control className='box' type="email" placeholder="Email"/>
                            <h1 className="formHeader">Password</h1><Form.Control className='box' type="password" placeholder="Password" />
                            </div>
                        <Link to="/">
                        <Button type="submit" className="buttons">LOG IN</Button>
                        </Link>
                        <Form.Label className="register">
                            Don't have an account? Register <Link to="/register"> Here</Link>
                        </Form.Label>

                    </Form>
                </div>
    )
}

export default login;