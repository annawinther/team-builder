import React, { useState } from 'react';
import TeamMembers from './TeamMembers';

const initialTeam = [
    {id: "1", name: "gabe", email: "gabe@lambda.com"},
    {id: "2", name: "anna", email: "anna@lambda.com"},
    {id: "3", name: "luke", email: "luke@lambda.com"}
]


const Team = () => {
    const [teamState, setTeamState] = useState(initialTeam)

    return (
        <div>
            {
                teamState.map(team => (
                    <TeamMembers 
                        key={team.id}
                        name={team.name} 
                    />
                ))
            }
        </div>
    )
}

export default Team;