import React from 'react';
import HeaderBar from '../components/header-bar/header-bar';
import NavigationMenu from '../components/navigation-menu';
import AutoCompleteSearch from './Months.js';
import Example from './BarChart';


export default class calculator extends React.Component {
    constructor() {
        super()
        this.state = { }

    }

    componentWillMount() {

    }


    render() {
        function  elecReading(units){

            var totalUnits=units;
            var offPeakRate=1;
            var mediumRate=1.10;
            var peakRate=3.20;
            var totalCharges=0;
            var PeakUnits ;
            if(totalUnits>1000){
                PeakUnits = totalUnits-1000;
                totalCharges = totalCharges + (PeakUnits * peakRate);
                totalUnits = 1000;
            }

            if(totalUnits > 50){
                totalUnits = totalUnits-500;
                totalCharges =  totalCharges + (totalUnits * mediumRate);
            }

            totalCharges = totalCharges + (totalUnits * offPeakRate);

            return totalCharges;

        }
        return (

            <div>
                <div className="row">
                    <HeaderBar/>
                </div>
                <div className="row">
                    <NavigationMenu/>
                </div>
                        <div className="content-wrapper">
                        <div style={{position:"relative",content:"left 50px"}}>

                            <form>
                              Select Month:  <select name="Months">
                                    <option value="1">Baisakh</option>
                                    <option value="2">Jestha</option>
                                    <option value="3">Asar</option>
                                    <option value="4">Shrwan</option>
                                </select>
                                <br/>
                              <input type="text" placeholder=" enter units" ref="units"/> <br/>
                                    <input type="button" value="calculate"/><br/>
                            </form>



                        </div>
                            <div>
                                <AutoCompleteSearch/>
                            </div>

                            <div>
                                <Example/>
                            </div>

                        </div>



            </div>

        )}
    }

