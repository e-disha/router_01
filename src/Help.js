import { NavLink, Outlet } from "react-router-dom";

const Help = () => {
    return (
        <div className="help">
            <h2>Help</h2>

            <nav>
                <NavLink to='faq'>FAQ</NavLink>
                <NavLink to='contact'>Contact</NavLink>
            </nav>

            <Outlet />
        </div>
    );
}
 
export default Help;