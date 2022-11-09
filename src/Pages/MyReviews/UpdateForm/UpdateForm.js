import React, { useContext, useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Navigate, useLoaderData, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';

const UpdateForm = () => {
    const { user } = useContext(AuthContext)
    const review = useLoaderData();
    const navigate = useNavigate()
    const { _id } = review;
    const [Reviews, setUpdatedReview] = useState([]);

    // This portion is extra for getting all my reviews so that we can set new updated review with it---------
    useEffect(() => {
        fetch(`https://photography-service-review-server.vercel.app/reviews?email=${user?.email}`
            // {
            //     headers: {
            //         authorization: `Bearer ${localStorage.getItem('genius-token')}`
            //     }
            // }
        )
            .then(res => res.json())
            .then(data => setUpdatedReview(data))
    }, [user?.email])

    const handleUpdate = event => {
        console.log('comed');
        event.preventDefault();
        const form = event.target;
        const updatedreview = form.rvwText.value;

        fetch(`https://photography-service-review-server.vercel.app/reviews/${_id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ review: updatedreview })
        })
            .then(res => res.json())
            .then(data => {
                form.reset();
                console.log(data);
                if (data.acknowledged) {
                    alert('Your Review Updated.')
                    form.reset();
                }
                if (data.modifiedCount > 0) {
                    const remaining = Reviews.filter(rvws => rvws._id !== _id);
                    const updated = Reviews.find(rvw => rvw._id === _id);
                    const newReviews = [updated, ...remaining];
                    setUpdatedReview(newReviews);

                }
            })
    }

    return (
        <div className='mb-9'>
            <h2 className='text-2xl font-bold text-center w-auto rvw-title p-2 mb-10'>Add Your Review Here</h2>
            <Form onSubmit={handleUpdate} className='rvw-form w-96 mx-auto p-5'>

                <Form.Group className="mb-3 " controlId="formBasicEmail">
                    <Form.Label ><strong>Name</strong></Form.Label>
                    <Form.Control className='p-2' disabled defaultValue={user.displayName} name="name" type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3 " controlId="exampleForm.ControlTextarea1">
                    <Form.Label><strong>Your Review:</strong></Form.Label>
                    <Form.Control defaultValue={review.review} required name="rvwText" as="textarea" className='textarea textarea-info w-80' rows={3} />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Update
                </Button>
            </Form>
        </div>
    );
};

export default UpdateForm;