'use strict';

var React = require('react');



var Carousel = require('nuka-carousel');

const App = React.createClass({
    mixins: [Carousel.ControllerMixin],
    render() {
        return (
            <Carousel style={{height:422}}>
                <img style={{height:422}} src="http://aves-g.com/wp-content/uploads/2017/03/for-us2.jpg"/>
                <img style={{height:422}} src="http://www.nea.org.np/images/slide-12.jpg" />
                <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide4"/>
                <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide5"/>
                <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide6"/>

            </Carousel>

        )
    }
});

module.exports = App;