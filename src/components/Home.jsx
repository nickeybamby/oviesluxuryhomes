import homeImage from '../../public/homeImage.jpg';

const Home = () => {
  return (
    <div id='home' className='relative h-[100vh]'>
      <img src={homeImage} alt="" className='w-full h-full object-cover'/>

      <div className='absolute inset-0 bg-gradient-to-t from-black/50 via-black/30 to-black/50 flex items-center justify-center'> 
        <div className='text-center text-white max-w-5xl px-4'>
          <h1 className='text-5xl sm:text-6xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-sky-300 via-sky-300 to-indigo-300 bg-clip-text text-transparent tracking-tight p-3'>Ovie's Luxury Homes</h1>

          <p className='text-lg md:text-2x-l mb-8'>Exclusive Homes and Interiors in Lagos</p>

          {/* <div className='bg-white/30 p-8 rounded-3xl shadow-2xl backdrop-blur-md max-w-2xl mx-auto'>
            <div className='flex flex-col md:flex-row gap-3'>
              <input type="text" placeholder='Search by location' className='flex-1 px-6 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 hover:border-blue-500 hover:bg-blue-50 focus:bg-white text-black transition-colors duration-200' />

               <select className='px-4 py-3 rounded-lg text-gray-700 border border-gray 300 focus:outline-none focus:ring-2 focus:ring-blue-500 '>
                <option value="">House</option>
                <option value="">Land</option>
                <option value="">Others</option>
               </select>

               <button className='bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors'>Search</button>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  )
}

export default Home