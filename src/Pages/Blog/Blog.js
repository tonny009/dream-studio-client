import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Blog.css'

const Blog = () => {
    return (
        <Container className='blog-container'>
            <h2 className='text-2xl font-bold text-center w-auto rvw-title p-2 mb-10'>Some qusteions-answers:</h2>
            <br></br>
            <Row>
                <Col lg="4" className='blog-parts'>
                    <p><strong>1.Difference between SQL and NoSQL</strong></p>
                    <p>Answer :   SQL is the programming language used to interface with relational databases.But NoSQL is a class of DBMs that are non-relational and generally do not use SQL</p>
                    <p>SQL databases use structured query language and have a predefined schema. NoSQL databases have dynamic schemas for unstructured data. Further , SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores.</p>
                    <p>SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.</p>
                </Col>
                <Col lg="4" className='blog-parts'>
                    <p><strong>1.What is JWT, and how does it work?</strong></p>
                    <p>Answer :  JSON Web Token (JWT) is an open standard that defines a compact and self-contained way for securely transmitting information between parties as a JSON object. This information can be verified and trusted because it is digitally signed </p>
                    <p>How it works:  In authentication, when the user successfully logs in using their credentials, a JSON Web Token will be returned. Since tokens are credentials, great care must be taken to prevent security issues. In general, you should not keep tokens longer than required.Whenever the user wants to access a protected route or resource, the user agent should send the JWT, typically in the Authorization header using the Bearer schema.The server's protected routes will check for a valid JWT in the</p>
                </Col>
                <Col lg="4" className='blog-parts'>
                    <p><strong>1.What is the difference between javascript and NodeJS?</strong></p>
                    <p>Answer :   Javascript is a Scripting language.It is a high-level programming language that uses the concept of Oops but it is based on prototype inheritance.NodeJS is a Javascript runtime environment.</p>
                    <p>Javascript can only be run in the browsers.We can run Javascript outside the browser with the help of NodeJS.It is basically used on the client-side.It is mostly used on the server-side.</p>
                </Col>
                <Col lg="4" className='blog-parts'>
                    <p><strong>1. How does NodeJS handle multiple requests at the same time?</strong></p>
                    <p>Answer :  NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them. EventLoop is the listener for the EventQueue.  </p>
                    <p>If NodeJS can process the request without I/O blocking then the event loop would itself process the request and sends the response back to the client by itself. But, it is possible to process multiple requests parallelly using the NodeJS cluster module or worker_threads module.</p>
                </Col>


            </Row>
        </Container>
    );
};

export default Blog;