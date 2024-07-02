import './Banner.css'
const Banner = () => {
    return (
        <section className="max-w-7xl px-6 md:px-0 mx-auto mt-10">
        <div id='bg-cover'  className="md:h-[600px] bg-cover pt-5">
            <div className="flex items-center h-[600px] justify-center">
                <div className=' text-center text-white'>
                    <h1 className="text-4xl font-bold mb-4">Discover an exceptional cooking class tailored for you!</h1>
                    <p className="text-lg mb-6">This our banner.Learn and Master Basic Recipe, fry , solve 500+ recipe problems to become an exceptionally well world-class shape. </p>
                    <div className="flex justify-center space-x-4">
                        <button className=" bg-green-600  hover:bg-blue-600 text-black px-6 py-3 rounded-md focus:outline-none">Explore Now</button>
                        <button className="bg-slate-300 hover:bg-gray-600 text-black px-6 py-3 rounded-md focus:outline-none">Our Feedback</button>
                    </div>
                    </div>
                </div>
        </div>
        </section>
    );
};

export default Banner;