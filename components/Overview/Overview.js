import React from 'react';
import HeaderBar from '../components/header-bar/header-bar';
import NavigationMenu from '../components/navigation-menu';
import Current from './currentOutage';
import reportform from '../Outage/reportoutageform';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import IndicatorChooser from '../textField.js';
import AutoCompleteSearch from '../AutoSearch.js';
import TabsExampleSimple from "../Outage/Tab.js";
import _ from 'lodash';
import Buttons from '../components/header-bar/loginButton';
import axios from 'axios';

import {withGoogleMap, GoogleMap, Marker} from "react-google-maps";

const SimpleMapExampleGoogleMap = withGoogleMap(props => (
    <GoogleMap
        defaultZoom={8}
        defaultCenter={{
            lat: 27.688069, lng: 85.32305
        }}
    >
        {props.markers.map((marker, index) => (
            <Marker
                {...marker}
                onRightClick={() => props.onMarkerRightClick(index)}
            />
        ))}
    </GoogleMap>
));


export default class Overview extends React.Component {
    constructor() {
        super()
        this.state = {
            markers : [

            ]
        }
        this.fetchCurrentOutage=this.fetchCurrentOutage.bind(this);
        this.fetchFutureOutage=this.fetchFutureOutage.bind(this);
    }

    componentWillMount() {

    }
   fetchCurrentOutage(){
        console.log('fetchCurrentOutage')
       let ajita=this;
      axios.post('http://localhost:8080/fetchCurrentOutage').then(function(response){
          console.log(response.data)
          let data=response.data;
          let list=[];
          for(let i in data){
              let position={lat:'',lng:''};
              let map={position:''};
              position.lat= data[i]["lat"];
              position.lng=data[i]["lng"];
              map.position=position;
              list.push(map);
          }
         ajita.setState({markers:list})
      })
   }
   fetchFutureOutage(){
     this.setState({markers:[  {position: {lat: 27.688069, lng: 85.32305}},
         {position: {lat: 27.693215, lng: 85.321128}},
         {position: {lat: 27.734716, lng: 85.377566}},
         {position: {lat: 27.739907, lng: 85.391399}}]})
   }

    render() {


        return (
            <div>
                <div className="row">
                    <HeaderBar>
                        <button className="btn btn-primary pull-right" style={{
                            marginTop: 11,
                            borderRadius: 5,
                            outline: 'none',
                            color: 'white',
                            height: 27,
                            fontSize: 12,
                            marginLeft: 3,
                            marginRight: 11,
                            backgroundColor: 'brown',
                            borderColor: 'coral'
                        }}>User SignUp
                        </button>
                        <button className="btn btn-primary pull-right" style={{
                            marginTop: 11,
                            borderRadius: 5,
                            outline: 'none',
                            color: 'white',
                            height: 27,
                            fontSize: 12,
                            marginLeft: 3,
                            backgroundColor: 'brown',
                            borderColor: 'coral'
                        }}> User Login
                        </button>
                        <button className="btn btn-primary pull-right" style={{
                            marginTop: 11,
                            borderRadius: 5,
                            outline: 'none',
                            color: 'white',
                            height: 27,
                            fontSize: 12,
                            marginLeft: 3,
                            backgroundColor: 'brown',
                            borderColor: 'coral'
                        }}>Admin Login
                        </button>
                    </HeaderBar>

                </div>
                <div className="row">
                    <NavigationMenu/>
                    <div className="content-wrapper">
                        <div className="row" style={{marginTop:5}}>
                            <div className="col-md-2" style={{marginLeft:11}}>
                                <AutoCompleteSearch/>
                            </div>
                            <div className="col-md-9" style={{marginLeft:84}}>
                                <MuiThemeProvider>
                                    < TabsExampleSimple currentOutage={this.fetchCurrentOutage} futureOutage={this.fetchFutureOutage}/>
                                </MuiThemeProvider>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                        <SimpleMapExampleGoogleMap
                            containerElement={
                                <div style={{height: 600}}/>
                            }
                            mapElement={
                                <div style={{height: 600}}/>
                            }
                            onMapLoad={_.noop}
                            onMapClick={_.noop}
                            markers={this.state.markers}
                            onMarkerRightClick={_.noop}
                        />
                        </div>
                    </div>
                </div>
            </div>

                )

                }
                }

