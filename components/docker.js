import React from "react";
import Drawer from "material-ui/Drawer";
import MenuItem from "material-ui/MenuItem";
import RaisedButton from "material-ui/RaisedButton";
import AppBar from "material-ui/AppBar";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import {cyan500} from "material-ui/styles/colors";
import getMuiTheme from "material-ui/styles/getMuiTheme";
const muiTheme = getMuiTheme ({
    palette:{
        textColor: cyan500,
    }
});


export default class Docker extends React.Component {

    constructor(props) {
        super(props);
        this.state = {open: false};

    }


    handleToggle (){this.setState({open: !this.state.open});}

    render() {

        return (
            <div>
                <MuiThemeProvider>
                    <RaisedButton
                        label="Toggle Drawer"
                        onTouchTap={this.handleToggle}
                    />
                </MuiThemeProvider>
                <MuiThemeProvider>
                    <Drawer open={this.state.open}>
                        <AppBar title="AppBar" />
                        <MenuItem>Menu Item</MenuItem>
                        <MenuItem>Menu Item 2</MenuItem>
                    </Drawer>
                </MuiThemeProvider>
            </div>
        );
    }
}