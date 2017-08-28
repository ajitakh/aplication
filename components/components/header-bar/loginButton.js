import React from 'react'

const styles = {
    button: {
        padding: '2em',
        left: '50px',
        right:'0px',

    }
}


export default class Buttons extends React.Component{

    render() {
        return(
            <div>
            <button className="btn btn-primary" style={{borderRadius:5,outline:'none',color:'white',height:27,fontSize:12}}>User SignUp</button>
            <button className="btn btn-primary"  style={{borderRadius:5,outline:'none',color:'white',height:27,fontSize:12,marginLeft:3}}> User Login</button>
            <button className="btn btn-primary"  style={{borderRadius:5,outline:'none',color:'white',height:27,fontSize:12,marginLeft:3}}>Admin Login</button>
            </div>

        )
    }
}

