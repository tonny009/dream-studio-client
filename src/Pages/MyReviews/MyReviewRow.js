import React from 'react';
import { Link } from 'react-router-dom';

const MyReviewRow = ({ eachReview, handleDelete, handleStatusUpdate }) => {
    const { _id, serviceName, review, serviceId, reviewerName, reviewerImg } = eachReview;
    return (
        <tr>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={reviewerImg} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{reviewerName}</div>
                        <div className="text-sm opacity-50">Took Service: ({serviceName})</div>

                    </div>
                </div>
            </td>
            <td>
                {review}

            </td>
            <td>
                <button onClick={() => handleDelete(_id)} className='btn btn-ghost'>X</button>
                <button className='btn btn-ghost'><Link to={`/update/${_id}`}>Edit</Link></button>
            </td>

        </tr>
    );
};

export default MyReviewRow;