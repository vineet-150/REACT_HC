import React, { Children, useState } from "react";
import ThemeContext from "./ThemeContext";
const UserThemeProvider=({children})=>{

    const [themeMode,setThemeMode]=useState("light");

    const darkTheme=()=>setThemeMode("dark");
    const lightTheme=()=>setThemeMode("light");


    return(
        <ThemeContext.Provider value={{themeMode,darkTheme,lightTheme}}>

            {children}

        </ThemeContext.Provider>
    )


}


export default UserThemeProvider;