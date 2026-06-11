function Skills() {
    return (
        <div id="skills" className='bg1 pt-5'>
          {/* Skills Section */}
          <div className='flex flex-col items-center justify-center snap-always snap-center ' >
            <h1 className='text-6xl font-bold text-center'>Skills</h1>
              <p className='text-lg text-centermx-auto max-w-2xl mb-4'>
                My main goal as a website developer since graduation was to gain more experience building web applications using common frameworks and libraries such as React.js, Ruby on Rails, and Node.js
              </p>
              {/* Frontend Technologies */}
              {/* Parent Container for the entire layout */}
              <div className='max-w-6xl mx-auto px-4 space-y-12'>

                <div className='flex flex-col md:flex-row gap-8 items-start'>
                  
                  {/* Frontend Technologies - Left Side */}
                  <div className='flex-1 w-full bg-[#2e375e] border border-[#3f4b80] text-white'>
                    <h3 className='text-2xl font-bold mb-6 text-center'>Frontend Technologies</h3>
                    <div className='grid grid-cols-2 sm:grid-cols-3 gap-6'>
                      <div className='flex flex-col items-center gap-3'>
                        <img src="/src/assets/images/skills/react.svg" alt="React" className='w-10 h-10' />
                        <p className='text-sm font-medium text-white'>React</p>
                      </div>
                      <div className='flex flex-col items-center gap-3'>
                        <img src="/src/assets/images/skills/tailwindcss.png" alt="Tailwind CSS" className='w-10 h-10' />
                        <p className='text-sm font-medium'>Tailwind CSS</p>
                      </div>
                      <div className='flex flex-col items-center gap-3'>
                        <img src="/src/assets/images/skills/vue.png" alt="Vue" className='w-10 h-10' />
                        <p className='text-sm font-medium'>Vue</p>
                      </div>
                      <div className='flex flex-col items-center gap-3'>
                        <img src="/src/assets/images/skills/bootstrap.png" alt="Bootstrap" className='w-10 h-10' />
                        <p className='text-sm font-medium'>Bootstrap</p>
                      </div>
                    </div>
                  </div>

                  {/* Backend/Fullstack Frameworks - Right Side */}
                  <div className='flex-1 w-full bg-[#2e375e] border border-[#3f4b80] text-white'>
                    <h3 className='text-2xl font-bold mb-6 text-center'>Backend/Fullstack Frameworks</h3>
                    <div className='grid grid-cols-2 sm:grid-cols-3 gap-6'>
                      <div className='flex flex-col items-center gap-3'>
                        <img src="/src/assets/images/skills/Rubyonrails.png" alt="Ruby on Rails" className='w-10 h-10' />
                        <p className='text-sm font-medium'>Ruby on Rails</p>
                      </div>
                      <div className='flex flex-col items-center gap-3'>
                        <img src="/src/assets/images/skills/nodejs.png" alt="Node.js" className='w-10 h-10' />
                        <p className='text-sm font-medium'>Node.js</p>
                      </div>
                      <div className='flex flex-col items-center gap-3'>
                        <img src="/src/assets/images/skills/express.png" alt="Express.js" className='w-10 h-10' />
                        <p className='text-sm font-medium'>Express.js</p>
                      </div>
                      <div className='flex flex-col items-center gap-3'>
                        <img src="/src/assets/images/skills/aspnetcore.png" alt="ASP.NET Core" className='w-10 h-10' />
                        <p className='text-sm font-medium'>ASP.NET Core</p>
                      </div>
                      <div className='flex flex-col items-center gap-3'>
                        <img src="/src/assets/images/skills/electron.png" alt="Electron" className='w-10 h-10' />
                        <p className='text-sm font-medium'>Electron</p>
                      </div>
                    </div>
                  </div>

                </div> 

                {/* Development Tools/Version Control */}
                <div className='w-full border-t border-white/5 pt-8 bg-[#2e375e] border border-[#3f4b80] text-white'>
                  <h3 className='text-2xl font-bold mb-6 text-center'>Development Tools/Version Control</h3>
                  <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6'>
                    <div className='flex flex-col items-center gap-3'>
                      <img src="/src/assets/images/skills/bitbucket.png" alt="Bitbucket" className='w-10 h-10' />
                      <p className='text-sm font-medium'>Bitbucket</p>
                    </div>
                    <div className='flex flex-col items-center gap-3'>
                      <img src="/src/assets/images/skills/github.svg" alt="Github" className='w-10 h-10' />
                      <p className='text-sm font-medium'>Github</p>
                    </div>
                    <div className='flex flex-col items-center gap-3'>
                      <img src="/src/assets/images/skills/azure.png" alt="Microsoft Azure" className='w-10 h-10' />
                      <p className='text-sm font-medium'>Microsoft Azure</p>
                    </div>
                    <div className='flex flex-col items-center gap-3'>
                      <img src="/src/assets/images/skills/vscode.png" alt="Visual Studio Code" className='w-10 h-10' />
                      <p className='text-sm font-medium'>Visual Studio Code</p>
                    </div>
                    <div className='flex flex-col items-center gap-3'>
                      <img src="/src/assets/images/skills/postman.png" alt="Postman" className='w-10 h-10' />
                      <p className='text-sm font-medium'>Postman</p>
                    </div>
                    <div className='flex flex-col items-center gap-3'>
                      <img src="/src/assets/images/skills/nunit.png" alt="NUnit" className='w-10 h-10' />
                      <p className='text-sm font-medium'>NUnit</p>
                    </div>
                    <div className='flex flex-col items-center gap-3'>
                      <img src="/src/assets/images/skills/cypress.svg" alt="Cypress" className='w-10 h-10' />
                      <p className='text-sm font-medium'>Cypress</p>
                    </div>
                    <div className='flex flex-col items-center gap-3'>
                      <img src="/src/assets/images/skills/selenium.png" alt="Selenium" className='w-10 h-10' />
                      <p className='text-sm font-medium'>Selenium</p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
            {/* Tech Stack Section */}
            <div className='flex flex-col items-center justify-center snap-always snap-center pb-10 gap-6'>
              <h1 className='text-2xl font-bold text-center pt-5'>To view the related project, click on the tech stack you're interested in!</h1>
              
              <div className='max-w-4xl mx-auto px-4 w-full'>              
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                  
                  {/* ASP.NET Core */}
                  <a href='#aspnet' className='h-full'>
                    <div className='flex flex-col justify-between gap-4 p-4 bg-[#2e375e] border border-[#3f4b80] rounded-lg h-full'>
                      <p className='font-medium text-center'>ASP.NET Core</p>
                      <div className='flex gap-3 justify-center mt-auto'>
                        <img src="/src/assets/images/skills/aspnetcore.png" alt="ASP.NET Core" className='w-12 h-12 object-contain' />
                      </div>
                    </div>
                  </a>

                  {/* Node.js + React + TypeScript */}
                  <a href="#nodereact" className='h-full'>
                    <div className='flex flex-col justify-between gap-4 p-4 bg-[#2e375e] border border-[#3f4b80] rounded-lg h-full'>
                      <p className='font-medium text-center'>Node.js + React + TypeScript</p>
                      <div className='flex gap-3 justify-center mt-auto'>
                        <img src="/src/assets/images/skills/nodejs.png" alt="Node.js" className='w-12 h-12 object-contain' />
                        <img src="/src/assets/images/skills/react.svg" alt="React" className='w-12 h-12 object-contain' />
                      </div>
                    </div>
                  </a>

                  {/* Electron JS */}
                  <a href="#electron" className='h-full'>
                    <div className='flex flex-col justify-between gap-4 p-4 bg-[#2e375e] border border-[#3f4b80] rounded-lg h-full'>
                      <p className='font-medium text-center'>Electron + Node.js + React</p>
                      <div className='flex gap-3 justify-center mt-auto'>
                        <img src="/src/assets/images/skills/electron.png" alt="Electron" className='w-12 h-12 object-contain' />
                        <img src="/src/assets/images/skills/nodejs.png" alt="Node.js" className='w-12 h-12 object-contain' />
                        <img src="/src/assets/images/skills/react.svg" alt="React" className='w-12 h-12 object-contain' />
                      </div>
                    </div>
                  </a>

                  {/* Ruby on Rails */}
                  <a href="#rails" className='h-full'>
                    <div className='flex flex-col justify-between gap-4 p-4 bg-[#2e375e] border border-[#3f4b80] rounded-lg h-full'>
                      <p className='font-medium text-center'>Ruby on Rails</p>
                      <div className='flex gap-3 justify-center mt-auto'>
                        <img src="/src/assets/images/skills/Rubyonrails.png" alt="Ruby on Rails" className='w-12 h-12 object-contain' />
                      </div>
                    </div>
                  </a>

                </div>
              </div>
            </div>
        </div>
    )
} export default Skills;