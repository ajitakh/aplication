import React from 'react';
import {CSVLink, CSVDownload} from 'react-csv';



export default class ExportData extends React.Component{
    constructor(){
        super()
    }
    render(){

        return(
            <div>
            <CSVLink className="pull-right" filename={this.props.fileName} data={this.props.data} style={{color:'orange',marginTop:15,marginRight:10}} >Export Data</CSVLink>

            </div>)


    }


}
