import React from 'react';
import { Button } from './ui/button';

const Body: React.FC = () => {
  return (
    <>
      <Hero/>
    </>
  );
};

export default Body;

export const Hero = () => {
  return (
    <>
      <div className="">
        <div className="flex items-center flex-col py-4">
        <h1 className='tr text-[4rem] font-bold'>All your business on one platform.</h1>
        <h2 className='tr text-[2.5rem] '>Simple, efficient, yet affordable!</h2>
        </div>
        <div className="flex gap-2 items-center justify-center">
            <Button variant='outline' className='bg-slate-700 text-white'><p>Start now - It`s free</p></Button>
            <Button variant='outline' className='bg-slate-100'><p>Schedule a demo</p></Button>
        </div>
      </div>

      <section className='h-max my-4 relative'>
        <div className="bg-slate-100 h-[30vh] rounded-t-[100%] "></div>
        {/* List of apps and their link +++ map func. */}

          <div className="flex justify-center items-center flex-col absolute left-0 right-0 top-20">
            <h1 className='font-bold '>Imagine a vast collection of business apps at your disposal.</h1>
            <p className='text-center py-1 flex-col flex pb-2'>Got something to improve? There is an app for that. <span>No complexity, no cost, just a one-click install.</span></p>
            <p className='text-center py-4 flex-col flex'>Each app simplifies a process and empowers more people. <span>Imagine the impact when everyone gets the right tool for the job, with perfect integration.</span></p>
          </div>
      </section>

      <div className="">
        <div className="flex flex-col justify-center items-center">
          <p className='font-bold tr text-[6rem] '>Unleash</p>
          <p className='font-bold tr text-[4rem] mt-[-55px]'>your <span className='text-green-700 text-[5rem] tr'>growth potential</span> </p>
          
        </div>
        <div className="flex flex-col justify-center items-center">
          <Button variant='outline' className='bg-slate-700 text-white'><p>Start now - It`s free</p></Button>
          <img src="https://odoocdn.com/openerp_website/static/src/img/arrows/secondary_arrow_sm_01.svg" width={15} height={20} className='py-2'/>
          <p className='text-[1rem] flex flex-col text-center'>No credit card required <span>Instant access</span> </p>
        </div>
      </div>
      
    </>
  );
};
