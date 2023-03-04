import { NavLink, Outlet } from "react-router-dom";
import Breadcrumbs from "./Breadcrumbs";

const RootElement = () => {
    return (
        <div className="root-element">
            <header>
                <nav>
                    <h1>DestinyFinder</h1>
                    <NavLink to='/'>Home</NavLink>
                    <NavLink to='about'>About</NavLink>
                    <NavLink to='help'>Help</NavLink>
                    <NavLink to='choices'>Destiny</NavLink>
                </nav>
                <Breadcrumbs />
            </header>
            
            <main>
                <Outlet />
            </main>
        </div>
    );
}
 
export default RootElement;