import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Link } from 'react-router-dom';
import 'react-photo-view/dist/react-photo-view.css';

const ServiceCard = ({ service }) => {
    const { serviceName, price, serviceDays, ratings, _id, serviceGiven, description, img } = service
    console.log(service);

    return (
        <div className="card lg:card-side h-auto bg-base-100 shadow-xl mt-5 pl-5">
            <PhotoProvider>
                <PhotoView src={img}>
                    <figure><img className='w-64 rounded-lg h-60 pl-4' src={img} alt="Album" /></figure>
                </PhotoView>
            </PhotoProvider>

            <div className="card-body">
                <h2 className="card-title">{serviceName}</h2>
                <p>
                    {
                        description?.length > 100 ?
                            <p className='text-left'>{description.slice(0, 100) + '...'}</p>
                            :
                            <p>{description}</p>
                    }
                </p>
                <p><strong>Total Days:  {serviceDays} days</strong></p>
                <p><strong>Price: ${price}</strong></p>
                <p> <strong>Ratings: {ratings}</strong></p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary"><Link to={`/servicedetails/${_id}`}>View Details</Link></button>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;