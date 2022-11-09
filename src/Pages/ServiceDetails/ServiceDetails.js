import React, { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';
import './ServiceDetails.css'
import { AuthContext } from '../../Context/AuthProvider';
import ReviewRow from './ReviewRow';
import 'react-photo-view/dist/react-photo-view.css';
import { PhotoProvider, PhotoView } from 'react-photo-view';

const ServiceDetails = () => {
    useTitle('ServiceDetails')

    const { user, logOut } = useContext(AuthContext);
    const [reviews, setReviews] = useState([])

    const serviceDetails = useLoaderData();
    const { serviceName, price, serviceDays, ratings, _id, serviceGiven, description, img } = serviceDetails

    // we are sending serviceid as query value to fetch data of that service id---
    useEffect(() => {
        //here I did mistake that in url instead of Email I write email , as in collection the property is named Email 
        fetch(`http://localhost:5000/reviewsAll?serviceId=${_id}`)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    return (
        <div className="grid gap-6 grid-cols-1 md:grid-cols-1 lg:grid-cols-2 mt-8">
            <div className="grid gap-6 grid-cols-1 md:grid-cols-1 lg:grid-cols-1 details">
                <div>
                    <PhotoProvider>
                        <PhotoView src={img}>
                            <figure><img className='w-64 rounded-lg  pl-6' src={img} alt="Album" /></figure>
                        </PhotoView>
                    </PhotoProvider>
                    {/* <figure><img className='w-64 rounded-lg  pl-6' src={img} alt="Album" /></figure> */}
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
                <div className="overflow-x-auto w-full">
                    <table className="table w-full">
                        {/* <!-- head --> */}
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Review</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                reviews.map(eachReview => <ReviewRow key={eachReview._id} eachReview={eachReview}></ReviewRow>)
                            }
                        </tbody>

                    </table>
                </div>
                <button className="btn btn-primary"><Link to={`/commentform/${_id}`}>Add Comment</Link></button>
            </div>

        </div>
    );
};

export default ServiceDetails;