function Contact() {
   const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
   };

   return (
        <div id='contact' className='bg1 snap-always  snap-center flex flex-col items-center justify-center bg1 min-h-screen'>
          <h1 className='text-5xl font-bold text-center pb-10'>Contact Me</h1>
            <form onSubmit={handleSubmit} className='flex flex-col gap-4 mb-8 w-48 mx-auto items-center'>
              <input type="email" placeholder="Your Email" required className='px-4 py-2 rounded bg-gray-200 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 w-full' />
              <textarea placeholder="Your Message" rows={4} required className='px-4 py-2 rounded bg-gray-200 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none w-full' />
              <button type="submit" className='px-6 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded transition'>Send</button>
            </form>
            <div className='grid grid-cols-3 gap-8 '>
            <div className='flex flex-col items-center gap-2'>
              <p className='text-sm font-medium'>Github</p>
              <img src="/src/assets/images/skills/Github.svg" alt="Github Icon" className='w-20 h-20 cursor-pointer hover:scale-110 transition' onClick={() => window.open('https://github.com/EthanTrebish', '_blank')} />
            </div>
            <div className='flex flex-col items-center gap-2'>
              <p className='text-sm font-medium'>Email</p>
              <img src="/src/assets/images/skills/email.png" alt="Email Icon" className='w-20 h-20 cursor-pointer hover:scale-110 transition' onClick={() => window.open('mailto:ethan.trebish@gmail.com', '_blank')} />
            </div>
            <div className='flex flex-col items-center gap-2'>
              <p className='text-sm font-medium'>LinkedIn</p>
              <img src="/src/assets/images/skills/linkedin.png" alt="LinkedIn Icon" className='w-20 h-20 cursor-pointer hover:scale-110 transition' onClick={() => window.open('https://www.linkedin.com/in/ethan-trebish/', '_blank')} />
            </div>
            <p className='text-sm text-center'>Last Edited - June 10th 2023</p>
            </div>
        </div>
   ) 
} export default Contact;