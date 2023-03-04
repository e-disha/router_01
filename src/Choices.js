import { Link, useLoaderData } from "react-router-dom";

const Choices = () => {
    const choices = useLoaderData()

    return (
        <div className="choices">
            {choices.map(choice => (
                <Link to={choice.id.toString()} key={choice.id}>
                    <h2>{ choice.title }</h2>
                    <p>{ choice.location }</p>
                </Link>
            ))}
        </div>
    );
}
 
export default Choices;

export const choicesLoader = async () => {
    const res = await fetch('http://localhost:9000/choices')

    if (!res.ok){
        throw Error('Could not find such destiny')
      }

    return res.json()
}