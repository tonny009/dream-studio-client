import { neutral } from 'daisyui/src/colors/colorNames';
import React, { useContext } from 'react';
import { Button, Form } from 'react-bootstrap';

import { AuthContext } from '../../Context/AuthProvider';
import useTitle from '../../hooks/useTitle';

const AddService = () => {

    const { user } = useContext(AuthContext);
    useTitle('Add Service')

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const price = form.price.value;
        const serviceDays = form.days.value;
        const serviceGiven = form.totaldone.value;
        const serviceName = form.srvcName.value;
        const img = form.image.value;
        const description = form.details.value

        const fullService = {
            serviceName,
            price,
            serviceDays,
            serviceGiven,
            img,
            description
        }

        fetch('https://photography-service-review-server.vercel.app/services', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(fullService)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    alert('Your Service added successfully! ')
                    form.reset();
                }
            })
            .catch(er => console.error(er));


    }

    return (
        <div className='mb-9'>
            <h2 className='text-2xl font-bold text-center w-auto rvw-title p-2 mb-10'>Add New Service Here</h2>
            <Form onSubmit={handleSubmit} className='rvw-form w-96 mx-auto p-5'>

                <Form.Group className="mb-3 " controlId="formBasicEmail">
                    <Form.Label ><strong>Service Name:</strong></Form.Label>
                    <Form.Control className='p-2' required name="srvcName" type="text" placeholder="Enter Service Name" />
                </Form.Group>
                <Form.Group className="mb-3 " controlId="formBasicEmail">
                    <Form.Label ><strong>Price</strong></Form.Label>
                    <Form.Control className='p-2' required name="price" type="text" placeholder="Enter Cost" />
                </Form.Group>
                <Form.Group className="mb-3 " controlId="formBasicEmail">
                    <Form.Label ><strong>Service Days</strong></Form.Label>
                    <Form.Control className='p-2' required name="days" type="text" placeholder="Enter Today days" />
                </Form.Group>
                <Form.Group className="mb-3 " controlId="formBasicEmail">
                    <Form.Label ><strong>Service Total Given: </strong></Form.Label>
                    <Form.Control className='p-2' required name="totaldone" type="text" placeholder="Enter Total experince number" />
                </Form.Group>
                <Form.Group className="mb-3 " controlId="formBasicEmail">
                    <Form.Label ><strong>Service Image: </strong></Form.Label>
                    <Form.Control className='p-2' required name="image" type="text" placeholder="Give Photo URL" />
                </Form.Group>
                <Form.Group className="mb-3 " controlId="exampleForm.ControlTextarea1">
                    <Form.Label><strong>Description :</strong></Form.Label>
                    <Form.Control required name="details" as="textarea" className='textarea textarea-info w-80' rows={3} />
                </Form.Group>




                <Button variant="primary" type="Add">
                    Submit
                </Button>
            </Form>
        </div>

    );
};

export default AddService;