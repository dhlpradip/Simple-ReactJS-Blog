import BlogList from "./BlogList";
import useFetch from "./useFetch"


const Blogs = () => {
    const { data: blogs, isPending, error } = useFetch('http://localhost:8010/blogs');
    return ( 
        <div className="home">
        {error && <div> { error } </div> }
        {isPending && <div>Loading.....</div> }
        {blogs && <BlogList blogs = {blogs} title="All  Blogs!" />}
    
    </div>

     );
}
 
export default Blogs;