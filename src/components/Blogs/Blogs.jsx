import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(()=>{
        fetch('recipe.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])
    return (
        <section className="w-2/3">
            <h2 className="text-xl">Blogs:{blogs.length}</h2>
            <div className="grid md:grid-cols-2 gap-3">
            {
                blogs.map(blog => <Blog key={blog.recipe_id} blog={blog}></Blog>)
            }
            
            </div>
            
        </section>
    );
};

export default Blogs;