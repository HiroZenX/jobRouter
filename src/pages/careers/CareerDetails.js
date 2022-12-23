import { useLoaderData, useParams } from "react-router-dom"

export default function CareerDetails() {
    const {id} = useParams();
    const career = useLoaderData();

    return (
        <div className="career-details">
            <h2>Career Details for {career.title}</h2>
            <p>Starting Salary : {career.salary}</p>
            <p>Career Location : {career.location}</p>

            <div className="details">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia nobis, voluptatibus quaerat corrupti quibusdam ut autem ratione ducimus, non animi ipsa molestiae asperiores voluptatum a eius dignissimos earum explicabo, officiis cupiditate amet tenetur exercitationem. Nihil dolorem quos commodi, eligendi error, repudiandae saepe a quisquam optio fugiat ea, blanditiis corporis. Aliquam!</p>
            </div>
        </div>
  )
}

// loader function

export const careerDetailsLoader = async ({params}) =>{
    const { id } = params;
    const res = await fetch("http://localhost:4000/careers/"+id)
    return res.json()
}
