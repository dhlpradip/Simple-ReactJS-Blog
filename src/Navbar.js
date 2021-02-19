import { Link } from "react-router-dom";

import { HashLink} from 'react-router-hash-link';
const Navbar  = () => {
    return (
        <nav className="navbar">
        <h1><HashLink smooth to ="/">Pradeep</HashLink></h1>

        <div className="links">
            <HashLink smooth to="/#">Home</HashLink>
            <HashLink smooth to="/#contact">Contact</HashLink>
            <Link to="/blog"style={{
                color: "white",
                backgroundColor: "#f1356d",
                borderRadius: '8px'

            }} >Blog</Link>

        </div>
        </nav>
    );
}
 
export default Navbar ;