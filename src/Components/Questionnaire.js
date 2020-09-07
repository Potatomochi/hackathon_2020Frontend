import React from "react"
import { BrowserRouter as Router, Link } from 'react-router-dom';
import {Form, Button} from 'react-bootstrap';
// import login from "./login";
// import questionnaire from "./questionnaire";
import "./login.css";
import "../App.css";

function questionnaire(){
    return(

                <div className="app_page_questionnaire">
                    <Form className="FormGrp">

                        <Form.Label className="FormLabel">QUESTIONNAIRE</Form.Label>

                        <Form.Group controlId="qns1">
                            <Form.Label className ="questionsContent">
                                <p className="questions">How will you react to the following news:</p>
                                <p>Donald Trump blames China for Coronavirus</p>    
                            </Form.Label>

                            <Form.Control className="box" as="select">
                                <option>Sell</option>
                                <option>Enter the stock market</option>
                                <option>Do nothing</option>
                                <option>Don't know</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group controlId="qns2">
                            <Form.Label className ="questionsContent">
                                <p>Drug companies to issue joint pledge on safety, standards to bolster confidence in COVID-19 vaccine.</p>    
                            </Form.Label>

                            <Form.Control className="box" as="select">
                                <option>Sell everything</option>
                                <option>Enter the stock market</option>
                                <option>Do nothing</option>
                                <option>Don't know</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group controlId="qns3">
                            <Form.Label className ="questionsContent">
                                <p>The Federal Reserve cut interest rates by half a percentage point Tuesday to ease possible economic disruptions caused by the spread of coronavirus. </p>    
                            </Form.Label>

                            <Form.Control className="box" as="select">
                                <option>Sell everything</option>
                                <option>Enter the stock market</option>
                                <option>Do nothing</option>
                                <option>Don't know</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group controlId="qns4">
                            <Form.Label className ="questionsContent">
                                <p>New-home construction slipped in February — before the coronavirus even became a major concern in the U.S.</p>    
                            </Form.Label>

                            <Form.Control className="box" as="select">
                                <option>Sell everything</option>
                                <option>Enter the stock market</option>
                                <option>Do nothing</option>
                                <option>Don't know</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group controlId="qns5">
                            <Form.Label className ="questionsContent">
                                <p className="questions">Financial Product/literacy knowledge</p>
                                <p>If I win, you will need to pay me $100, if you win I will pay you $100, will you participate in the game?</p>    
                            </Form.Label>

                            <Form.Control className="box" as="select">
                                <option>Yes</option>
                                <option>No</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group controlId="qns6">
                            <Form.Label className ="questionsContent">
                                <p>If not, what is the minimum amount I have to pay you per win for you to join?</p>    
                            </Form.Label>

                            <Form.Control className="box" as="select">
                                <option>110</option>
                                <option>125</option>
                                <option>150</option>
                                <option>200</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group controlId="qns7">
                            <Form.Label className ="questionsContent">
                                <p>Will you continue sitting through a movie even though you realised you didn’t like it half way?</p>    
                            </Form.Label>

                            <Form.Control className="box" as="select">
                                <option>Yes</option>
                                <option>No</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group controlId="qns8">
                            <Form.Label className ="questionsContent">
                                <p>You are now asked to choose one of the following options:</p>    
                            </Form.Label>

                            <Form.Control className="box" as="select">
                                <option>66.6% chance to win $1000, 33.3% nothing</option>
                                <option>Get $ 600 for sure</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group controlId="qns9">
                            <Form.Label className ="questionsContent">
                                <p>You have been given $2000, choose one the following options:</p>    
                            </Form.Label>

                            <Form.Control className="box" as="select">
                                <option>66.6% chance to win $1000, 33.3% or nothing</option>
                                <option>Get $ 600 for sure</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group controlId="qns10">
                            <Form.Label className ="questionsContent">
                                <p>What is a dividend?</p>    
                            </Form.Label>

                            <Form.Control className="box" as="select">
                                <option>When the stock divides into multiple new shares to increase the liquidity of the shares</option>
                                <option>Total remaining cash of the company after expenses. </option>
                                <option>Payment made to the shareholders.</option>
                                <option>Compares a company's debt levels with its assets, equity, and earnings, to evaluate the likelihood of a company staying afloat over the long haul.</option>
                                <option>Don't know</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group controlId="qns11">
                            <Form.Label className ="questionsContent">
                                <p>What generally happens to bonds when the government interest rates decrease?</p>    
                            </Form.Label>

                            <Form.Control className="box" as="select">
                                <option>Nothing happens</option>
                                <option>Bond prices increase</option>
                                <option>Bond prices decrease</option>
                                <option>Don't know</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group controlId="qns12">
                            <Form.Label className ="questionsContent">
                                <p>Suppose over the next 10 years the prices of the things you buy double. If your income also doubles, will you be able to </p>    
                            </Form.Label>

                            <Form.Control className="box" as="select">
                                <option>Buy less than you can buy today </option>
                                <option>The same as you can buy today</option>
                                <option>More than you can buy today?</option>
                                <option>Don't know</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group controlId="qns12">
                            <Form.Label className ="questionsContent">
                                <p>Suppose you had 100 US dollars in a savings account and the bank adds 10 percent per year to the account. How much money would you have in the account after five years if you did not remove any money from the account? </p>    
                            </Form.Label>

                            <Form.Control className="box" as="select">
                                <option>more than 150 dollars</option>
                                <option>exactly 150 dollars </option>
                                <option>less than 150 dollars </option>
                                <option>Don't know</option>
                            </Form.Control>
                        </Form.Group>

                    <Link to="/">
                        <Button type="submit" className="buttons">COMPLETE</Button>
                    </Link>
                    </Form>
                </div>
 
    )
}

export default questionnaire;
    