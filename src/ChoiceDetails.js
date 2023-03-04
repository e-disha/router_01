import { useLoaderData, useParams } from 'react-router-dom'

export default function CareerDetails() {
  const { id } = useParams()
  const choice = useLoaderData()

  return (
    <div className="choice-details">
      <h2>Destiny of a {choice.title}</h2>
      <p>{ choice.desc }</p>
      <p>Located in the planet of {choice.location}</p>
    </div>
  )
}

// data loader
export const choiceDetailsLoader = async ({ params }) => {
  const { id } = params

  const res = await fetch('http://localhost:9000/choices/' + id)

  if (!res.ok){
    throw Error('Could not find such destiny')
  }

  return res.json()
}