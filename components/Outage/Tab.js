import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';


const styles = {
    headline: {
        fontSize: 24,
        paddingTop: 16,
        marginBottom: 12,
        fontWeight: 400,
        backgroundColor: '#800000'
    }
}

const TabsExampleSimple = (props) => (

    <Tabs >
        <Tab onClick={props.currentOutage} style={{backgroundColor:'rgb(125,31,25)'}} label="Current Outage" >

        </Tab>
        <Tab onClick={props.futureOutage} style={{backgroundColor:'rgb(125,31,25)'}} label="Future Outage" >

        </Tab>
        <Tab style={{backgroundColor:'rgb(125,31,25)'}} label="Report Outage">

        </Tab>
    </Tabs>

);

export default TabsExampleSimple;