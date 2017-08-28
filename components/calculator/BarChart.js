import React from 'react';
import BarChart from 'react-bar-chart';

const data = [
    {text: 'asadh', value: 500},
    {text: 'Shrrwan', value: 300},
    {text: 'bhadra', value: 100}
];

const margin = {top: 20, right: 20, bottom: 30, left: 40};

const Example = React.createClass({
    getInitialState() {
        return { width: 300 };
    },

    componentDidMount: () => {
        window.onresize = () => {
            this.setState({width: this.refs.root.offsetWidth});
        };
    },

    handleBarClick(element, id){
        console.log(`The bin ${element.text} with id ${id} was clicked`);
    },

    render() {
        return (
            <div ref='root'>
                <div className="col-md-6" style={{width: '50%'}}>
                    <BarChart ylabel='energy usage'
                              width={this.state.width}
                              height={400}
                              margin={margin}
                              data={data}
                              onBarClick={this.handleBarClick}/>
                </div>
            </div>
        );
    }
});

export  default Example ;