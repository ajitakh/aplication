import React from 'react';
export default class Outage extends React.Component {
    constructor() {
        super()
        this.state = {}
    }

    componentWillMount() {

    }


    render() {
        return (
            <div>
                <div className="row">
                    <HeaderBar/>
                </div>
                <div className="row">
                    <NavigationMenu/>
                    <div className="content-wrapper">
                        <Carousel/>
                        <h1> hello </h1>
                        <reportform/>



                        <button className="btn -primary pull-right">Report outage</button>


                    </div>

                </div>
            </div>



        )


    }



}
