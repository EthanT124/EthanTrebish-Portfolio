import StoriesOfTheLandCarousel from "./carousels/SOTLCarousel"
import BacklogCarousel from "./carousels/BacklogCarousel"
import SchedulingCarousel from "./carousels/DentalCarousel"
import LuxCartCarousel from "./carousels/LuxCartCarousel"
import MarketplaceCarousel from "./carousels/MarketplaceCarousel"
import ThomasTheCookCarousel from "./carousels/ThomasTheCookCarousel"
function portfolio() {
  return (
       <div id='portfolio' className='snap-start'>
          <div id='aspnet' className='bg2 border border-black pb-2 h-screen'>
            <h1 className="text-center text-3xl font-bold pb-5">Portfolio</h1>
            <h1 className='text-2xl text-center'>ASP.NET Core MVC 7.0 <br/> Stories of the Land</h1>  
            <p className='text-center text-lg font-semibold text-black mx-auto max-w-2xl mb-4'>
            Stories of the Land was a web application built with ASP.NET Core, with the goal to enhance lerning experiences within a camp in Prince Albert, Saskatchewan</p>
            <StoriesOfTheLandCarousel />
          </div>
          <div id='rails' className='bg3 flex flex-col items-center justify-center border border-black h-screen'>
            <h1 className='text-2xl text-center'>Ruby on Rails <br/> LuxCart E-Commerce site</h1>
            <p className='text-center text-lg font-semibold mx-auto max-w-2xl mb-4'>
            LuxCart was another passion project. I had zero experience with Tailwindcss and Ruby as a whole and wanted to challenge myself. I'm proud of what I created here</p>
            <LuxCartCarousel/>
          </div>
          <div id='electron' className='bg2 flex flex-col items-center justify-center border border-black h-screen'>
            <h1 className='text-2xl text-center'>Electron + Node.js + React <br/> ETTSolutions: Dental Scheduling Software</h1>
            <p className='text-center text-lg font-semibold text-black mx-auto max-w-2xl mb-4'>
            ETTSolutions was a dental scheduling software built with Electron, Node.js, and React, designed to make booking appointments easier for dental practices.</p>
            <SchedulingCarousel/>
          </div>
          <div id='nodereact' className='bg3 flex flex-col items-center justify-center border border-black h-screen '> 
            <h1 className='text-2xl text-center'>Node.js + React + TypeScript <br/> React Video Game Backlog Manager</h1>
            <p className='text-center text-lg font-semibold  mx-auto max-w-2xl mb-4'>
            This was a passion project that I used as a way to start learning React and TypeScript, and a way to clean up my backlog of course.</p>
            <BacklogCarousel/>
          </div>
          <div id='react' className='bg2 flex flex-col items-center justify-center border border-black h-screen'>
            <h1 className='text-2xl text-center'>Node.js + Vue + Bootstrap <br/> CWEB280 Project Phone Marketplace</h1>
            <p className='text-center text-lg font-semibold text-black mx-auto max-w-2xl mb-4'>
            The phone marketplace was a project I had worked on during school, the goal was to use learn how to create APIs and then send them to the frontend with Vue.js</p>
            <MarketplaceCarousel/>
          </div>
          <div id="bootstrap" className='bg3 flex flex-col items-center justify-center border border-blac h-screen'>
              <h1 className='text-2xl text-center'>Bootstrap <br/> CWEB190 Thomas the Cook Redesign</h1>
              <p className='text-center text-lg font-semibold  mx-auto max-w-2xl mb-4'>
              The previous Thomas the Cook website was redesigned using Bootstrap to improve its layout and user experience.</p>
              <ThomasTheCookCarousel/>
            </div>
    </div>
  )
} export default portfolio
