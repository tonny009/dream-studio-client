import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';
import ServiceCard from '../ServiceCard/ServiceCard';
import About from './About/About';
import Banner from './Banner/Banner';
import MsgSend from './MsgSend';

const Home = () => {

    useTitle('Home')

    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('https://photography-service-review-server.vercel.app/serviceshome')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <br></br>

            {/* Services sector---------- */}
            <div className='w-full bg-base-200 mb-8 pb-5 pt-5'>
                <h2 className='text-center font-extrabold text-3xl'>Our Services</h2>
                <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mt-2'>
                    {
                        services.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
                    }
                </div>
                <div className='text-center mt-8'>
                    <button className="btn btn-primary"><Link to='/services'>View All Services</Link></button>
                </div>
            </div>

            {/* msgsend------- */}
            <MsgSend></MsgSend>

        </div>
    );
};

export default Home;