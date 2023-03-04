import { Link } from "react-router-dom";

const LostPage = () => {
    return (
        <div className="lost-page">
            <h2>Looks like you've lost your way...</h2>
            <p>Have no fear, you can always <Link to='/'>return back home</Link></p>
        </div>
    );
}
 
export default LostPage;