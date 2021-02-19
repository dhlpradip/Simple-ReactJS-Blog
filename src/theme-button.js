
import { useState } from "react";
import { themes } from "./changeTheme";

import { ThemeContext } from "./changeTheme";
const ThemedButton = (props) => {
    const [theme,setTheme]= useState(themes.dark)
    return ( 
        <button
        {...props}
        style={{backgroundColor: themes.background}}
        
        />
     );
}
ThemedButton.contextType = ThemeContext;
 
export default ThemedButton;