import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';
import './ServiceDetails.css'

const ServiceDetails = () => {
    useTitle('DS/ServiceDetails')
    const serviceDetails = useLoaderData();
    const { serviceName, price, serviceDays, ratings, _id, serviceGiven, description, img } = serviceDetails

    return (
        <div className="grid gap-6 grid-cols-1 md:grid-cols-1 lg:grid-cols-2 mt-8">


            <div className="grid gap-6 grid-cols-1 md:grid-cols-1 lg:grid-cols-1 details">
                <div>
                    <figure><img className='w-64 rounded-lg  pl-6' src={img} alt="Album" /></figure>
                </div>

                <div className="card-body">
                    <h2 className="card-title text-2xl">{serviceName}</h2>
                    <p><strong>Description  :  </strong> {description}</p>
                    <p><strong>Total Days:  {serviceDays} days</strong></p>
                    <p><strong>Price: ${price}</strong></p>
                    <p> <strong>Ratings: {ratings}</strong></p>
                </div>
            </div>


            <div>
                <h2>Review section</h2>
                <button className="btn btn-primary"><Link to={`/commentform/${_id}`}>Add Comment</Link></button>
            </div>

        </div>
    );
};

export default ServiceDetails;