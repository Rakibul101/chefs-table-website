import { CiSearch } from "react-icons/ci";
import { FaRegUserCircle } from "react-icons/fa";
const Navbar = () => {


    return (
        <section className="max-w-7xl px-6 md:px-0 mx-auto mt-10">
            <div className="flex items-center justify-between">
                <h2 className="text-xl md:text-3xl font-bold">Recipe Calories</h2>
                <ul className="hidden md:flex gap-2 md:gap-6">
                    <li className="text-[#150b2bb3]"><a href="#">Home</a></li>
                    <li className="text-[#150b2bb3]"><a href="#">Recipe</a></li>
                    <li className="text-[#150b2bb3]"><a href="#">About</a></li>
                    <li className="text-[#150b2bb3]"><a href="#">Search</a></li>
                </ul>
                <div className="flex items-center gap-2 ">
                    <div className="hidden md:block input-icons relative">
                        <CiSearch className="absolute text-xl left-4 top-4"></CiSearch>
                        <input type="text" placeholder="Search" className="bg-[#150b2b0d] py-3 px-12 rounded-3xl" />
                    </div>
                    <FaRegUserCircle className="text-4xl p-1 bg-[#0BE58A] rounded-full" />
                </div>


            </div>
        </section>

    );
};

export default Navbar;