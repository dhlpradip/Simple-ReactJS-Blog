import { Link, useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";
import  Cookies  from 'universal-cookie';


const BlogDetails = () => {
  const { id } = useParams();
  const { data: blog, error, isPending } = useFetch('http://localhost:8010/blogs/' + id);
  const history = useHistory();

  const handleClick = () => {
    fetch('http://localhost:8010/blogs/' + blog.id, {
      method: 'DELETE'
    }).then(() => {
      history.push('/admin');
    }) 
  }
  const cookies=new Cookies();
  const token=cookies.get("TOKEN");

  return (
    <div className="blog-details">
      { isPending && <div>Loading...</div> }
      { error && <div>{ error }</div> }
      { blog && (
        <article>
          <h2>{ blog.title }</h2>
          <p>Written by { blog.author }</p>
          <div>{ blog.body }</div>
          <div>
            {token&& <button onClick={handleClick}>delete</button>}
            <Link to="/blog"style={{
                color: "white",
                backgroundColor: "#f1356d",
                borderRadius: '8px',
                padding: '10px',
                textDecoration: 'none',
                float:'right'
            }} >Go Back</Link>
          </div>
        </article>
      )}
    </div>
  );
}
 
export default BlogDetails;