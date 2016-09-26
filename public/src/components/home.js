'use strict';
import React, {Component} from "react";
const Home = React.createClass({
    render: function () {
        return <div>
            <Navgation/>
            <Carousel/>
            <Footer/>
        </div>
    }
});

const Navgation = React.createClass({
    render: function () {
        return <div>

        </div>
    }
});

const Carousel = React.createClass({
    render: function () {
        return <div>Carousel</div>
    }
});

const Footer = React.createClass({
    render: function () {
        return <div>Footer</div>
    }
});

export default Home;