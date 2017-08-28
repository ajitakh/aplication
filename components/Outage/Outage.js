import React from 'react';
import HeaderBar from '../components/header-bar/header-bar';
import NavigationMenu from '../components/navigation-menu';
import Carousel from './carousal.js';
import MarqueeDouble from 'react-marquee-double';
import LoginPage from '../Login.js';
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
                        <div className="row">
                            <div className="col-md=12" style={{height: 12}}>
                                <MarqueeDouble
                                    ref={(ref) => {
                                        this.marquee = ref
                                    }}

                                    step={1} interval={20}
                                    autoStart={true}
                                    direction={'left'}
                                    delay={100}
                                    onStart={() => {
                                        this.marquee.delay()
                                    }}>
                                    <h1 style={{height:30,fontSize:18}}>NEA Escorts ! A step toward managing electricity in a smart way. </h1>
                                </MarqueeDouble>
                            </div>
                        </div>
                        <br/>

                        <div className="row" style={{marginTop:22,height:422}}>
                            <div className="col-md-6">
                                <Carousel style={{height:422}}/>
                            </div>
                            <div className="col-md-6" style={{height:100}}>
                                <LoginPage/>

                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-2">
                                <a href="https://imgbb.com/">
                                    <img src="https://image.ibb.co/dJuBAQ/nea.jpg" alt="nea" border="0"/>
                                </a><br /><a target='_blank' href='https://imgbb.com/'></a><br /></div>
                        </div>

                    </div>


                </div>

                <div>

                </div>

            </div>



        )


    }


}
