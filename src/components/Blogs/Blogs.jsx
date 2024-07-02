import { useEffect, useState } from "react";

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(()=>{
        fetch('recipe.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])
    return (
        <section>
        <div className="text-center max-w-7xl px-6 md:px-0 mx-auto mt-10">
            <h2 className="text-5xl font-bold">Our Recipes:{blogs.length}</h2>
            <p className="w-2/3 mx-auto mt-2 text-[#150b2b99]">I like cooking .My favorite one is hotcake . In Saturday and Sunday. I cook hotcake by myself. I add cake powder to the bowl with milk and egg, then I shake it . I heat cake powder on the pan . after few minuets I eat hotcake with lemonade or coffee. That is my holiday.</p>
        </div>
        </section>
    );
};

export default Blogs;