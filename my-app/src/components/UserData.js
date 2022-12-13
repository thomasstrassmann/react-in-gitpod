import React from 'react'

function UserData(props) {
  return (
    <div>
        <h1>{props.isLoaded === true ? 
        (
            "Loaded"
        ) : (
            "Loading...")}</h1>
    </div>
  )
}

export default UserData