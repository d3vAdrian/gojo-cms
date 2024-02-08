import React from 'react';
import { Button } from './ui/button';
import { MoveRight, Wand2 } from 'lucide-react';

const Body: React.FC = () => {
  return (
    <>
      <Hero/>
    </>
  );
};

export default Body;

const Hero = () => {
  return (
    <>
      {/* top */}
      <div className="">
        <div className="flex items-center flex-col py-4">
        <h1 className='tr text-[4rem] font-bold'>All your business on one platform.</h1>
        <h2 className='tr text-[2.5rem] '>Simple, efficient, yet affordable!</h2>
        </div>
        <div className="flex gap-2 items-center justify-center">
            <Button variant='outline' className='bg-slate-700 text-white font-semibold'><p>Start now - It`s free</p></Button>
            <Button variant='outline' className='bg-slate-100 font-semibold'><p>Schedule a demo</p></Button>
        </div>
      </div>
      {/* center */}
      <section className='h-max my-4 '>
        
        <div>
            <LApps/>
            <div className="flex justify-center items-center flex-col ">
              <h1 className='font-bold text-lg py-1'>Imagine a vast collection of business apps at your disposal.</h1>
              <p className='text-center py-1 flex-col flex pb-2'>Got something to improve? There is an app for that. <span>No complexity, no cost, just a one-click install.</span></p>
              <p className='text-center py-4 flex-col flex'>Each app simplifies a process and empowers more people. <span>Imagine the impact when everyone gets the right tool for the job, with perfect integration.</span></p>
            </div>
        </div>

      </section>
      <section className='bg-slate-200 rounded-tl-[90px] rounded-br-[90px] h-max'>
        <div className=" px-5 w-[1100px] mx-auto py-[50px]">
          <h1 className='tr font-bold text-[50px] flex flex-col py-4'>Enterprise software <span className='tr font-bold mt-[-25px]'>done right<span className='text-blue-500'>.</span></span></h1>
          <Clist/>
        </div>
      </section>
      {/* bottom */}
      <div className="py-5">
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

const LApps =() => {
  const Apps = [
    // {icon : <Wand2 /> , name :'design'},
    {icon :  '/point.png', name :'pos'},
    {icon : '/crm.png' , name :'crm'},
    {icon : '/sale.png' , name :'accounting'},
    {icon :'/rental.png'  , name :'rental'},
    {icon : '/planning.png' , name :'planning'},
    {icon :  '/timesheet.png', name :'timesheets'},
    {icon :  '/email.png', name :'email marketing'},
    {icon :  '/sales.png', name :'Sales'},
    {icon : '/hr.png', name :'hr'},
    {icon :  '/doc.png', name :'documents'}
    // {icon :  , name :''}
  ]
  return(
    <>
      <div className="h-[30vh] flex justify-center items-center flex-col my-10">
        <div className="grid grid-cols-5 gap-2">
          {Apps.map(({icon ,name })=>(
            <div className="flex flex-col h-[13vh]">
              <Button variant="bounce" className='h-max m-2 hover:mt-5'>
                <img src={icon} className='h-[7vh] opacity-80'/>
              </Button>
              <p className='text-center font-semibold py-1 uppercase text-[14px] text-slate-900'>{name}</p>
            </div>
          ))}  
        </div>
        <div className="flex justify-between items-center w-[55%] mx-auto py-1">
              <p className='font-semibold'>Imagine without Gojo.</p>
              <div className="flex items-center gap-2">
                <p className='font-semibold' >View all Apps</p>
                <MoveRight />
              </div>
        </div>
      </div>  
    </>
  )
}

const Clist =()=>{
  const first = [
    { title:'Open source',desc:`Behind the technology is a community of 100k+ developers collaborating worldwide. We're united by the spirit of open source, and a common vision: " to transform companies, empower employees. " `,button:'Compare Editions',quote:'' },
    { title:'Highly customizable',desc:'Use Odoo Studio to automate actions, design custom screens, custom reports, or web hooks.' ,quote:''},
    { title:'40k+ community apps',desc:`Thanks to it's open source development model, Odoo became the world's largest business apps store. Imagine getting an app for every business needs.`,button:'Browse Community Apps' },
    { title:'No corporate bullsh*t',desc:'',button:'',quote:'"With most systems, you get 70% of what you hoped. With Odoo, you get more than what you expected. You, guys, will transform the market."' ,person:'- Anonymous competitor' }
  ]
  const second = [
    { title:'No vendor lock-in',desc:`No proprietary data format, just PostgreSQL: you own your data. No software lock-in: you get the source code, GitHub access, and the flexibility to host on our infrastructure, or on premise.`,button:'Follow us on Github',quote:'' },
    { title:'Fair pricing',desc:'No usage-based pricing, no feature upselling, no long term contracts, no hosting limits, no surprises... just a single price per user - all inclusive.' ,button:'View Pricing'}
  ]
  return(
    <>
      <div className="flex gap-4">
        <div className="flex flex-col gap-4">
          {/* 1st list */}
          {first.map(({title, desc , button, person, quote})=>(
            <div className="w-[565px] bg-white px-4 py-2">
              <p className='font-bold text-[20px] py-2'>{title}</p>
              <p className='font-medium text-[15px] w-[85%]'>{desc ? desc : '' }</p>
              <p className='font-medium text-[15px] w-[85%]'>{quote} <span>{person}</span></p>
              {button ? <Button variant="outline" className='bg-slate-600 text-white my-4'><p className='px-2 py-1'>{button}</p></Button> : '' }
            </div>
          ))}
          {/* 2nd list */}
        </div>
        <div className="flex flex-col gap-4">
          {/* 1st list */}
          {second.map(({title, desc , button, quote})=>(
            <div className="w-[470px] bg-white px-4 py-2">
              <p className='font-bold text-[20px] py-2'>{title}</p>
              <p className='font-medium text-[15px] w-[85%]'>{desc ? desc : '' }</p>
              <p className='font-medium text-[15px]'>{quote}</p>
              {button ? <Button variant="outline" className='bg-slate-600 text-white my-4'><p className='px-2 py-1'>{button}</p></Button> : '' }
            </div>
          ))}
          {/* 2nd list */}
        </div>
      </div>
    </>
  )
}