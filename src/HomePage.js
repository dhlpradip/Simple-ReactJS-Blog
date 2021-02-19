import { Link } from "react-router-dom";
import Contact from "./Contact";

const HomePage = () => {
    return (
        <div className="home-page">
            <h1>This is PRADEEP DAHAL</h1>
            <br/>
            <br/>
            <h3>I'm Learning Web Development, Kinda</h3>
            <br/>
            <br/>
            <p>Find my Blog by clicking
           <Link to="/blog" > Here </Link> </p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet voluptas aliquam nobis, sint, eius rerum dolorum architecto saepe pariatur neque incidunt inventore, quis ex amet asperiores aperiam doloribus expedita vel?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis natus impedit, incidunt optio ducimus dolore, voluptatem ex veritatis, laborum amet aut illum quod facilis praesentium? Totam sunt nobis dolore voluptas?</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing
                 elit. Amet veniam voluptas quas r
                 eprehenderit blanditiis aspern
                 atur deleniti laboriosam, iusto fugit, culpa repudiandae
                  debitis eaque laborum pariatur, atque labore 
                  quasi odio nulla.</p>
            <img src="https://www.technocrazed.com/wp-content/uploads/2015/12/black-wallpaper-to-set-as-background-33.jpg" alt=""/>
            <div id="contact">
            <Contact />
            <br/>
            <br/>
            </div>
        </div>
      );
}
 
export default HomePage;