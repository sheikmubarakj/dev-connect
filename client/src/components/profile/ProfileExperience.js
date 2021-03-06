import React from 'react'
import Moment from "react-moment";


const ProfileExperience = ({experience: {company, from, to, title, description} }) => {
    return (
    <div>
            <h3 class="text-dark">{company}</h3>
            <p>
             {<Moment format="YYYY/MM/DD">{from}</Moment>} - {to ? <Moment format="YYYY/MM/DD">{to}</Moment> : "Now"}
            </p>
            <p><strong>Position: </strong>{title}</p>
            <p>
              <strong>Description: </strong>{description && description}
            </p>
          </div>
  )
  
}

export default ProfileExperience

