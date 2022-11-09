import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/AuthProvider';
import useTitle from '../../hooks/useTitle';
import MyReviewRow from './MyReviewRow';

const MyReviews = () => {
    useTitle('My Reviews')
    const { user, logOut } = useContext(AuthContext)
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        //here I did mistake that in url instead of Email I write email , as in collection the property is named Email 
        fetch(`http://localhost:5000/reviews?email=${user?.email}`
            // {
            //     headers: {
            //         authorization: `Bearer ${localStorage.getItem('genius-token')}`
            //     }
            // }
        )
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [user?.email])

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure, you want to delete this review?');
        if (proceed) {
            fetch(`http://localhost:5000/reviews/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    // console.log(data);

                    // this portion is for updating only that particular order not all orders
                    if (data.deletedCount > 0) {
                        alert('Deleted Successfully');
                        const remaining = reviews.filter(rvw => rvw._id !== id);
                        setReviews(remaining);
                    }
                })
        }
    }

    // const handleStatusUpdate = id => {
    //     fetch(`http://localhost:5000/reviews/${id}`, {
    //         method: 'PATCH',
    //         headers: {
    //             'content-type': 'application/json'
    //         },
    //         body: JSON.stringify({ status: 'Approved' })
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data);
    //             if (data.modifiedCount > 0) {
    //                 const remaining = orders.filter(odr => odr._id !== id);
    //                 const approving = orders.find(odr => odr._id === id);
    //                 approving.status = 'Approved'

    //                 const newOrders = [approving, ...remaining];
    //                 setOrders(newOrders);
    //             }
    //         })
    // }

    return (
        <div className="overflow-x-auto w-full mt-10 mb-10">
            {console.log({ reviews })}
            <table className="table w-full">
                {/* <!-- head --> */}
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Review</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        reviews.map(eachReview => <MyReviewRow
                            key={eachReview._id} handleDelete={handleDelete} eachReview={eachReview}>

                        </MyReviewRow>)
                    }
                </tbody>

            </table>
        </div>
    );
};

export default MyReviews;