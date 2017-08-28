import React from 'react';
import HeaderBar from '../components/header-bar/header-bar';
import NavigationMenu from '../components/navigation-menu';


export default class contactNea extends React.Component {
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

                    <div>
                        <h1> We are here for you </h1>


                    </div>

                </div>
            </div>

        )

    }
}
