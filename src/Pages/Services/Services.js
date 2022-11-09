import React from 'react';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';
import ServiceCard from '../ServiceCard/ServiceCard';

const Services = () => {
    useTitle('DS/services')
    const getAllServices = useLoaderData()
    // console.log(getAllServices);
    return (
        <div>
            <h2 className='text-center font-extrabold text-3xl'>We Provide These services</h2>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mt-5'>
                {
                    getAllServices.map(service => <ServiceCard
                        key={service._id} service={service}>

                    </ServiceCard>)
                }

            </div>
        </div>



    );
};

export default Services;