import React from 'react';
const styles = {
    button: {
        padding: '1em',
        right:'0em'
    }
}

export default class Buttons extends React.Component{
    myClick () {
        alert("Hello World!");
    }
    render() {
        return(
            <button onClick={this.myClick} style={[styles.button]}>

            </button>
        )
    }
}
