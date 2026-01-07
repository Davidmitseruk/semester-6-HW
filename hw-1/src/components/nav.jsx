import {Link, link, NavLink} from "react-router-dom"
import React from "react"

function Navigation(){

    return(
        <div>
            <NavLink>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/movies">Movies</Link>
                    </li>
                </ul>
            </NavLink>    
        </div>
    )
}
export default Navigation;