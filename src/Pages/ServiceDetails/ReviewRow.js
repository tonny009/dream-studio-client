import React from 'react';

const ReviewRow = ({ eachReview }) => {
    const { _id, serviceName, review, serviceId, reviewerName, reviewerImg, date } = eachReview;
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
                <p>{date}</p>
                <br />
            </td>

        </tr>
    );
};

export default ReviewRow;