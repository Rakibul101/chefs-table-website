import './Banner.css'
const Banner = () => {
    return (
        <section className="max-w-7xl px-6 md:px-0 mx-auto mt-10">
            <div id='bg-cover' className="md:h-[600px] bg-cover pt-5">
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
            <div className="text-center max-w-7xl px-6 md:px-0 mx-auto mt-10">
                <h2 className="text-5xl font-bold">Our Recipes</h2>
                <p className="w-2/3 mx-auto mt-2 text-[#150b2b99]">I like cooking .My favorite one is hotcake . In Saturday and Sunday. I cook hotcake by myself. I add cake powder to the bowl with milk and egg, then I shake it . I heat cake powder on the pan . after few minuets I eat hotcake with lemonade or coffee. That is my holiday.</p>
            </div>
        </section>
    );
};

export default Banner;