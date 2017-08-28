import React from "react";
import {Link} from "react-router";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import RaisedButton from "material-ui/RaisedButton";
const style = {
    margin: 12,
    height:30

};
export default class NavvBar extends React.Component{
    constructor(props){
        super(props)

    }
    render(){
        return(
            <div style={{marginLeft:20}}>
     {/*   <Link to="/fundamental"><button>fundamental</button></Link>
                <Link to="/technical"><button>technical</button></Link>*/}
                <Link to="/fundamental">
                    <MuiThemeProvider>
                        <RaisedButton label="Fundamental Analysis" primary={true} style={style}></RaisedButton>
                    </MuiThemeProvider>
                </Link>

                <Link to="/technical">
                    <MuiThemeProvider>
                        <RaisedButton label="Technical Analysis" primary={true} style={style}></RaisedButton>
                    </MuiThemeProvider>
                </Link>
                <Link to="/dashboard">
                    <MuiThemeProvider>
                        <RaisedButton label="Dashboard" primary={true} style={style}></RaisedButton>
                    </MuiThemeProvider>
                </Link>
            </div>
        );
    }
}
