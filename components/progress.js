import React from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import CircularProgress from "material-ui/CircularProgress";

export default class CircleProgress extends React.Component {
 constructor(props){
     super(props);
}
render(){
     return(
         <div>
                <MuiThemeProvider>
                    <CircularProgress size={30} thickness={7} />
                </MuiThemeProvider>
         </div>
     );
    }

}