import React from 'react'

function About() {
  return (
    <div className='py-16 bg-white'>
      <div className='container m-auto px-6 text-gray-600 md:px-12 xl:px-12'>
        
        <div className='flex flex-col md:flex-row items-center gap-10'>
          
          {/* Image */}
          <div className="md:w-5/12 flex justify-center">
            <img
              className='w-[300px] h-80 object-cover rounded-lg'
              src="https://images.pexels.com/photos/32227390/pexels-photo-32227390.jpeg"
              alt="image"
            />
          </div>

          {/* Text */}
          <div className="md:w-7/12">
            <h2 className="text-2xl text-gray-900 font-bold md:text-4xl text-center md:text-left">
              React development is carried out by passionate developers
            </h2>

            <p className="mt-6 text-gray-600 text-center md:text-left">
              Lorem ipsum dolor sit amet consectetur adipisicing elit...
            </p>

            <p className="mt-4 text-gray-600 text-center md:text-left">
              Nobis minus voluptatibus pariatur dignissimos libero...
            </p>
          </div>

        </div>

      </div>
    </div>
  )
}

export default About