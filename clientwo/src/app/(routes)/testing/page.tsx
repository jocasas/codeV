"use client";
// `app/page.tsx` is the UI for the `/` URL
import Layout from "./layout.";
import './window.css'

export default function Page() {

  const  colocoloWindow = (
    <div className='outerborder bg-gray-500 p-1'>
              <div className='middlespace pt-1'>
                <div className='bg-black-200 text-center'>COLOCOLO WINDOW</div>
                  <div className='inerborder bg-gray-500 p-1'>
                    <div className='bg-black pl-10 pr-10 pb-10 pt-10'>
                      <div className='bg-blue-500'><p>
                        loremipsum loremipsum loremipsum loremipsum 
                        loremipsum loremipsum loremipsums loremipsum 
                        loremipsum loremipsum loremipsum</p>
                      </div>
                </div>
              </div>
            </div>
          </div>
    )

  const avatarBubbles= (<div className='mt-10 bg-white'>
            <div className="flex items-center -space-x-4">
              <img
                alt="user 1"
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1480&amp;q=80"
                className="relative inline-block h-12 w-12 rounded-full border-2 border-white object-cover object-center hover:z-10 focus:z-10"
              />
              <img
                alt="user 2"
                src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1061&amp;q=80"
                className="relative inline-block h-12 w-12 rounded-full border-2 border-white object-cover object-center hover:z-10 focus:z-10"
              />
              <img
                alt="user 3"
                src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1288&amp;q=80"
                className="relative inline-block h-12 w-12 rounded-full border-2 border-white object-cover object-center hover:z-10 focus:z-10"
              />
              <img
                alt="user 4"
                src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1287&amp;q=80"
                className="relative inline-block h-12 w-12 rounded-full border-2 border-white object-cover object-center hover:z-10 focus:z-10"
              />
              <img
                alt="user 5"
                src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1760&amp;q=80"
                className="relative inline-block h-12 w-12 rounded-full border-2 border-white object-cover object-center hover:z-10 focus:z-10"
              />
            </div>

            <div className="w-full pt-5 px-4 mb-8 mx-auto ">
                <div className="text-sm text-gray-700 py-1">
                    Made with <a className="text-gray-700 font-semibold" href="https://www.material-tailwind.com/docs/html/avatar#avatar-stack?ref=tailwindcomponents" target="_blank">Material Tailwind</a> by <a href="https://www.creative-tim.com?ref=tailwindcomponents" class="text-gray-700 font-semibold" target="_blank"> Creative Tim</a>.
                </div>
            </div>
          </div>

    )

  const cardTerminalComponent= (
        <div className="m-10 bg-black text-white rounded-lg p-6 w-96 shadow-md">

      <div className="flex items-center mb-4">
        <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
        <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
      </div>

      <div className="mb-4">
        <div className="flex items-center text-xs font-mono text-gray-500">
          <span className="mr-1">user@hostname:</span>
          <span className="text-blue-300 mr-1">~</span>
          <span className="text-green-300">$</span>
        </div>
        <div className="ml-6 text-sm font-mono text-white">
          <p className="mb-1">ls</p>
          <p className="mb-1">file.txt</p>
          <p className="mb-1">folder</p>
        </div>
      </div>

      <div className="flex items-center text-xs font-mono text-gray-500">
        <span className="mr-1">user@hostname:</span>
        <span className="text-blue-300 mr-1">~</span>
        <span className="text-green-300">$</span>
        <input type="text" className="ml-2 bg-transparent border-none focus:outline-none text-white" />
      </div>

    </div>
    )

  const windowsTerminal = (
    <div className="bg-black text-white p-4 rounded-md shadow-md">

      {/* Header */}
      <div className="flex items-center justify-between mb-2">
        <div className="text-white text-lg font-semibold">Windows Terminal</div>
        <button className="text-white hover:text-gray-300">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
      </div>

      {/* Window Content */}
      <div className="overflow-y-auto max-h-40">
        <p className="mb-4 text-gray-300">This window design is inspired by Windows Terminal.</p>
        {/* Add more content as needed */}
      </div>

    </div>
  );
  

  const AlternativeTerminalCard = (
    <div className="bg-gray-800 text-white rounded-lg p-6 w-96 shadow-md">

      <div className="mb-4">
        <div className="flex items-center text-xs font-mono text-gray-500">
          <span className="mr-1">user@hostname:</span>
          <span className="text-blue-300 mr-1">~</span>
          <span className="text-green-300">$</span>
        </div>
        <div className="ml-6 text-sm font-mono text-white">
          <p className="mb-1">cd projects</p>
          <p className="mb-1">npm start</p>
          <p className="mb-1">git status</p>
        </div>
      </div>

      <div className="flex items-center text-xs font-mono text-gray-500">
        <span className="mr-1">user@hostname:</span>
        <span className="text-blue-300 mr-1">~</span>
        <span className="text-green-300">$</span>
        <input type="text" className="ml-2 bg-transparent border-none focus:outline-none text-white" />
      </div>

    </div>
  );

  const uniqueWindow =  (
    <div className="border-2 border-gray-400 p-4 rounded-md shadow-md">

      {/* Header */}
      <div className="flex items-center justify-between mb-4 bg-gray-700 p-2 rounded-t-md">
        <div className="flex items-center">
          <div className="w-3 h-3 bg-red-500 rounded-full mr-1"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full mr-1"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          <div className="ml-2 text-white text-lg font-semibold">Unique Window</div>
        </div>
        <button className="text-white hover:text-gray-300">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
      </div>

      {/* Window Content */}
      <div className="overflow-y-auto max-h-40">
        <p className="mb-4 text-gray-700">This is a unique window design. You can add your content here.</p>
        {/* Add more content as needed */}
      </div>

    </div>
  );

  const DarkHeaderPanel = ({ title, children }) => {
  return (
    <div className="border border-dotted border-gray-700 p-4 rounded-md shadow-md">

      {/* Dark Header */}
      <div className="flex items-center justify-between mb-2 bg-gray-800 p-2 rounded-t-md">
        <div className="text-white text-lg font-semibold">{title}</div>
        {/* Additional header content or buttons can be added here */}
      </div>

      {/* Panel Content */}
      <div className="overflow-y-auto max-h-40">
        {children}
      </div>

    </div>
  );
}

  return (
    <Layout>
      <div className="ml-10 Main">
        <div className="text-white font-sans">{colocoloWindow}</div>
        <div>{avatarBubbles}</div>
        <div className='bg-white'>{cardTerminalComponent}</div>
        <div>{AlternativeTerminalCard}</div>
        <div>{windowsTerminal}</div>
        <div>{uniqueWindow}</div>
         <DarkHeaderPanel title="Dark Panel"/>
      </div>
    </Layout>
  );
}
