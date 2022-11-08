import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {
    const { serviceName, price, serviceDays, ratings, _id, serviceGiven, description, img } = service
    return (
        <div className="card lg:card-side h-80 bg-base-100 shadow-xl mt-5">
            <figure><img className='w-44 rounded-lg h-60 pl-4' src={img} alt="Album" /></figure>
            <div className="card-body">
                <h2 className="card-title">{serviceName}</h2>
                <p>Click the button to listen on Spotiwhy app.</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary"><Link to={`/servicedetails/${_id}`}>View Details</Link></button>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;