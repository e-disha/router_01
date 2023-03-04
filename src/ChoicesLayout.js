import { Outlet } from "react-router-dom";

const ChoicesLayout = () => {
    return (
        <div className="choices-layout">
            <Outlet />
        </div>
    );
}
 
export default ChoicesLayout;