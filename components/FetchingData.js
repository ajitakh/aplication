import React from "react";
import Paper from "material-ui/Paper";
import CircleProgress from "../components/progress";

const style = {
    height:800,
    width: 1320,
    textAlign: 'center',
    display: 'inline-block',
};
const circleStyle={
    marginTop:100
}

export default class PaperEX extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
    return(
        <div>

            <div style={{marginLeft:615}}> </div>
            <Paper children={<div><h3>Fetching data....</h3><CircleProgress style={circleStyle} /></div>} style={style} />
        </div>

    );
    }

}

