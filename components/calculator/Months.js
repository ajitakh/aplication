import React, {Component} from "react";
import AutoComplete from "material-ui/AutoComplete";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import {cyan500} from "material-ui/styles/colors";
const muiTheme = getMuiTheme({
    palette: {
        textColor: cyan500,
    },
    input: {
        marginTop:5,
        height:35,
        width:90
    }
});
const hintText=(<div style={{fontWeight:'900',marginBottom:5}}>view energy usage for month:</div>);
const security = [
    "Baisakh",
    "jestha",
    "asar",
    "shrawan"

];

class AutoCompleteSearch extends Component {
    constructor(props) {
        super(props);
        this.handleNewRequest = this.handleNewRequest.bind(this);
    }

    handleNewRequest(searchText) {

        let str = searchText;
        let text = str.substring(str.lastIndexOf("(") + 1, str.lastIndexOf(")"));
        console.log('From child Autosearch: '+ text+ ' '+str );
        {
            this.props.onClick(text, str)
        }
    }


    render() {
        return (

            <MuiThemeProvider >
                <AutoComplete
                    openOnFocus={true}
                    hintText={hintText}
                    filter={AutoComplete.caseInsensitiveFilter}
                    dataSource={security}
                    maxSearchResults={10}
                    listStyle={{width: '100%'}}
                    onNewRequest={this.handleNewRequest}
                />
            </MuiThemeProvider>
        );

    }
}

export default AutoCompleteSearch;