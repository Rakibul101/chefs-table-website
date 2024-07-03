import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from 'prop-types';

const Blogs = ({handleAddTOBookmark}) => {
    const [blogs, setBlogs] = useState([]);

    useEffect(()=>{
        fetch('recipe.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])
    return (
        <section className="md:w-2/3">
            <div className="grid md:grid-cols-2 gap-3">
            {
                blogs.map(blog => <Blog key={blog.recipe_id} blog={blog} handleAddTOBookmark={handleAddTOBookmark}></Blog>)
            }
            
            </div>
            
        </section>
    );
};
 Blogs.propTypes = {
    handleAddTOBookmark: PropTypes.func
 }
export default Blogs;