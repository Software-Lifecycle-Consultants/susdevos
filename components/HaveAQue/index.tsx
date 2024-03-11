export default function Qution() {
   
  return (

      
    <div className=" bg-teal-400 flex-none  justify-center p-8 px-6 py-24 sm:py-32 lg:px-8">
        <div className="grid grid-cols-1 2xl:grid-cols-1 mx-24 gap-6">
        <div className="bg-white mx-auto max-w-2xl text-center mt-16 rounded-[32px] p-8">
        <h2 className="  text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mt-16">Have a question? </h2>
        <p className=" text-lg leading-8 text-gray-600 text-bold p-6 text-center">
          We strive to respond to all inquiries promptly. You can expect to hear back from us within 24 hours.
        </p>
        <form action="#" method="POST" className="mx-auto mt-16 max-w-xl sm:mt-20">
           <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-gray-900">
              First name
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="first-name"
                id="first-name"
                autoComplete="given-name"
                className="block w-auto rounded-md border-0 px-3.5 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-4 focus:ring-inset focus:ring-indigo-600 lg:text-sm lg:leading-6"
              />
            </div>
          </div></div>
          <div className="sm:col-span-2">
            <label htmlFor="email" className="block text-sm font-semibold leading-8 text-gray-900">
              Email
            </label>
            <div className="mt-2.5">
              <input
                type="email"
                name="email"
                id="email"
                autoComplete="email"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="Organization" className="block text-sm font-semibold leading-8 text-gray-900">
              Organization (website/ name)
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="Organization"
                id="Organization"
                autoComplete="organization"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div> 
            <div className="sm:col-span-2">
            <label htmlFor="message" className="block text-sm font-semibold leading-8 text-gray-900">
              Message
            </label>
            <div className="mt-2.5">
              <textarea
                name="message"
                id="message"
                rows={4}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                defaultValue={''}
              />
            </div>
          </div>
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