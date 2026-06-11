function navbar() {
    return (
        <div id='navbar'>
          <nav className="fixed top-0 left-0 right-0 z-50 bg-blue-800 after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-white/10 backdrop-blur">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
              <div className="relative flex h-16 items-center justify-between">
                
                {/* Mobile menu button - positioned absolute left */}
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  <button type="button" className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-white/5 hover:text-white focus:outline-2 focus:outline-indigo-500">
                    <span className="sr-only">Open main menu</span>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="size-6">
                      <path d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                </div>

                {/* Updated alignment: sm:justify-end handles the right alignment */}
                <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-end">
                  <div className="hidden sm:block">
                    <div className="flex space-x-4">
                      <a href="#home" className="rounded-md px-3 py-2 text-md font-medium text-gray-300 hover:bg-white/5 hover:text-white">Ethan Trebish</a>
                      <a href="#about" className="rounded-md px-3 py-2 text-md font-medium text-gray-300 hover:bg-white/5 hover:text-white">About Me</a>
                      <a href="#skills" className="rounded-md px-3 py-2 text-md font-medium text-gray-300 hover:bg-white/5 hover:text-white">Skills</a>
                      <a href="#portfolio" className="rounded-md px-3 py-2 text-md font-medium text-gray-300 hover:bg-white/5 hover:text-white">Portfolio</a>
                      <a href="#contact" className="rounded-md px-3 py-2 text-md font-medium text-gray-300 hover:bg-white/5 hover:text-white">Contact Me</a>
                      <a href="https://github.com/EthanT124" className="rounded-md px-3 py-2 text-md font-medium text-gray-300 hover:bg-white/5 hover:text-white">Github</a>
                      <a href="https://www.linkedin.com/in/ethan-trebish-0818b52aa/" className="rounded-md px-3 py-2 text-md font-medium text-gray-300 hover:bg-white/5 hover:text-white">Linkedin</a>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </nav>
        </div>
    )
} export default navbar