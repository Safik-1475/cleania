import React from 'react';

const Landing = () => {
    return (
        <>
            <div class="hero bg-accent min-h-[60vh]">
                <div class="hero-content flex-col lg:flex-row max-w-6xl mx-auto md:px-16">
                    <div>
                        <h2 className='font-bold text-primary text-lg uppercase'>best cleaning services</h2>
                        <h1 class="lg:text-5xl md:text-4xl sm:text-3xl font-bold capitalize">professional <span className='text-primary'>cleaning</span> services</h1>
                        <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button class="btn btn-primary">Get Started</button>
                    </div>
                    <img src="https://i.ibb.co/PrtKD4L/banner-bg.png" alt='banner image' className='h-full' />
                </div>
            </div>
        </>
    );
};

export default Landing;