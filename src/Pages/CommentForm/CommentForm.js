import React, { useContext } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import useTitle from '../../hooks/useTitle';
import './CommentForm.css'

const CommentForm = (props) => {

    useTitle('Review')
    const serviceDetails = useLoaderData();
    const { user } = useContext(AuthContext);
    const { serviceName, _id } = serviceDetails;

    const handleReview = event => {
        event.preventDefault();
        const form = event.target;

        const reviewerName = user.displayName;
        const email = user.email;
        const review = form.rvwText.value;
        const reviewerImg = user.photoURL;
        const serviceName = form.srvcName.value;
        const serviceId = _id;

        const fullReview = {
            serviceName,
            review,
            serviceId,
            reviewerName,
            reviewerImg,
            email
        }

        fetch('http://localhost:5000/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(fullReview)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    alert('Your Review Accepted.. Thank you!')
                    form.reset();

                }
            })
            .catch(er => console.error(er));


    }

    return (
        <div className='mb-9'>
            <h2 className='text-2xl font-bold text-center w-auto rvw-title p-2 mb-10'>Add Your Review Here</h2>
            <Form onSubmit={handleReview} className='rvw-form w-96 mx-auto p-5'>

                <Form.Group className="mb-3 " controlId="formBasicEmail">
                    <Form.Label ><strong>Service Name:</strong></Form.Label>
                    <Form.Control className='p-2' disabled defaultValue={serviceName} name="srvcName" type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-3 " controlId="formBasicEmail">
                    <Form.Label ><strong>Name</strong></Form.Label>
                    <Form.Control className='p-2' disabled defaultValue={user.displayName} name="name" type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-3 " controlId="formBasicEmail">
                    <Form.Label ><strong>Email</strong></Form.Label>
                    <Form.Control className='p-2' disabled defaultValue={user.email} name="email" type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        (We'll never share your email with anyone else.)
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3 " controlId="exampleForm.ControlTextarea1">
                    <Form.Label><strong>Your Review:</strong></Form.Label>
                    <Form.Control required name="rvwText" as="textarea" className='textarea textarea-info w-80' rows={3} />
                </Form.Group>


                <Button variant="primary" type="Add">
                    Submit
                </Button>
            </Form>
        </div>


    );
};

export default CommentForm;