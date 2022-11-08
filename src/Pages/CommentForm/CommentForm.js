import React from 'react';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';

const CommentForm = (props) => {

    useTitle('DS/Review')
    const serviceDetails = useLoaderData();
    const { serviceName, _id } = serviceDetails

    return (
        <div>
            <h2>Here will be comment form id is : {_id}</h2>
        </div>
    );
};

export default CommentForm;