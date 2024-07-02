import { IoTimeOutline } from "react-icons/io5";
import { AiOutlineFire } from "react-icons/ai";
import PropTypes from 'prop-types';
const Blog = ({ blog }) => {
    console.log(blog);
    const { recipe_image, recipe_name, short_description, ingredients, preparing_time, calories } = blog;
    return (
        <div className='border rounded-md border-gray-300 p-4'>
            <div className="h-[200px] w-full overflow-hidden">
                <img className='rounded-lg w-full h-full object-cover object-center ' src={recipe_image} alt="" />
            </div>
            <div>
                <h2 className='text-xl font-semibold'>{recipe_name}</h2>
                <p className='text-[#878787]'>{short_description}</p>
                <hr className='border-gray-300 border-1' />
                <p>Ingredients:{ingredients.length}</p>
                <ul className='text-[#878787] pl-3'>
                    <li>{ingredients[0]}</li>
                    <li>{ingredients[1]}</li>
                    <li>{ingredients[2]}</li>
                    <li>{ingredients[3]}</li>
                    <li>{ingredients[4]}</li>
                </ul>
                <hr className='border-gray-300 border-1' />
                <div className="flex">
                    <p className="flex gap-2 items-center pl-2 text-[#282828cc]"><span><IoTimeOutline className="text-xl" /></span>{preparing_time}</p>
                    <p className="flex gap-2 items-center pl-2 text-[#282828cc]"><span><AiOutlineFire className="text-xl" /></span>{calories}</p>
                </div>
                <button className="px-4 py-2 bg-[#0BE58A] rounded-xl">Want to Cook</button>
            </div>
        </div>
    );
};
Blog.propTypes = {
    blog: PropTypes.object.isRequired
}
export default Blog;