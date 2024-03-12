export default function Qution() {
   
  return (

      
    <div className=" bg-teal-400 flex-none justify-center p-4 px-6 py-24 sm:py-32 lg:px-8">
        <div className="grid grid-cols-1 2xl:grid-cols-1  gap-6 flex-none mx-auto justify-center">
        <div className="bg-white mx-auto max-w-2xl text-center mt-16 rounded-[32px] p-8">
        <h2 className="  text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mt-16">Have a question? </h2>
        <p className=" text-lg leading-8 text-gray-600 text-bold p-6 text-center">
          We strive to respond to all inquiries promptly. You can expect to hear back from us within 24 hours.
        </p>

        {/* Form */}

        <form action="#" method="POST" className="mx-auto max-w-xl">
           

    <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6  ">

        {/* Your name */}
            <div className="sm:col-span-3">
              <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900"> 
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="name"
                  id="name"
                  autoComplete="name"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="Your Name"
                />
              </div>
            </div>

            {/* Your email */}
            <div className="sm:col-span-3">
              <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="email"
                  id="email"
                  autoComplete="email"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="Your Email"
                />
              </div>
            </div>
          </div> 
 
        
        {/* Organization (website/ name) */}

          <div className="sm:col-span-2 mt-4">
            <label htmlFor="Organization" className="block text-sm font-semibold leading-8 text-gray-900">
              
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="Organization"
                id="Organization"
                autoComplete="organization"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="Organization (website/ name)"
              />
            </div>
          </div> 

          {/* Message */}
            <div className="sm:col-span-2 mt-4">
            <label htmlFor="message" className="block text-sm font-semibold leading-8 text-gray-900"> 
            </label>
            <div className="mt-2.5">
              <textarea
                name="message"
                id="message"
                rows={4}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                defaultValue={''}
                placeholder="Your Message"
              />
            </div>
          </div>

          {/* Submit button*/}
          <button
            type="submit"
            className="block w-full rounded-md bg-black px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 mt-8"
          >
            Send Message
          </button>
         
        </form>
        </div>
        </div>
    </div>
  
  )
}