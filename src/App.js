
import Navbar from './Navbar';
import Home from './Home';
import './index.css'
import { BrowserRouter as Router,Route,Switch } from "react-router-dom";
import Create from './Create';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';
import HomePage from './HomePage'
import Admin from './Admin';
import LoginPage from "./LoginPage";
import { useContext, useState } from 'react';
import { ThemeContext, themes } from './changeTheme.js';
import Footer from './Footer';
import FormikUse from './Formikuse';





function App() {
  const [theme,setTheme] = useState(themes.dark)
  const themeuse = useContext(ThemeContext);
  const ToggleTheme= () => {
    theme===themes.dark ? setTheme(themes.light):setTheme(themes.dark);
  };
  return (
    <ThemeContext.Provider value={themeuse}>
    <Router>
      <div className="App" style={{color:theme.color, background:theme.background}}>
        <div className="parent" >
        <Navbar />
        <button onClick={ToggleTheme} style={{background:theme.color}}>C</button>
        </div>
      <div className="content">
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/blog">
          <Home />
        </Route>
        <Route path="/create">
          <Create />
        </Route>
        <Route path="/admin">
          <Admin />
        </Route>
        <Route path="/blogs/:id">
          <BlogDetails />
        </Route>
        <Route path="/login">
          <LoginPage />
        </Route>
        <Route path="/formik">
          <FormikUse />
        </Route>

        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </div>
    <div className="footer">
      <Footer />
    </div>
    </div>

  </Router>
  </ThemeContext.Provider>
    
  )
}

export default App;
