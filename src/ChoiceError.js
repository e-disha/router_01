import { Link, useRouteError } from "react-router-dom";

const ChoiceError = () => {
    const error = useRouteError()
    return (
        <div className="choice-error">
            <h2>Error</h2>
            <p>{ error.message }</p>
            <Link to='/'>Go back home</Link>
        </div>
    );
}
 
export default ChoiceError;