import React from 'react';


export default function AdminView(props) {
    return(
        <div   style={{
          display: 'flex',
          textAlign:'center',
          justifyContent:"center",
          height: '100vh',
        }}>
          <h1>Welcome Admin! <br></br>
          Now that you are logged in, <br></br>
          you can delete items directly from the Listings page<br></br> 
          and create new listings under Add</h1>
        </div>
    )
}



