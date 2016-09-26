import React, { Component } from "react";
const Home = React.createClass({
    getInitialState: function () {
        return {
            isClicked: true,
            imageArray: ["1.jpg", "home.jpg", "4.jpg", "6.jpg"]
        }
    },

  render(){
    return (
      <div className="home-nav">
        <Navgation/>
        <Carousel onChange={this.state.imageArray}/>
        <Footer/>
      </div>
    )
  }
});

const Navgation = React.createClass({
  render(){
    return (
        <div>
        <div className="navbar">
            <ul className="nav nav-pills navbar-right">
              <li className="active"><a href="#">首页</a></li>
              <li><a href="#">暖窝窝</a></li>
              <li><a href="#">牵小手</a></li>
              <li><a href="#">情人湖</a></li>
                <li><a href="./components/Login">登录</a></li>
              <li><a href="#">注册</a></li>
              <li><a href="#">个人中心</a></li>
            </ul>
        </div>
        </div>
    )
  }
})

const Carousel = React.createClass({
  render(){
    return <div id="carousel-example-generic" className="carousel slide" data-ride="carousel">
              <ol className="carousel-indicators" style={{zIndex:1}}>
              <li data-target="#carousel-example-generic" data-slide-to="0" className="active"></li>
              <li data-target="#carousel-example-generic" data-slide-to="1"></li>
              <li data-target="#carousel-example-generic" data-slide-to="2"></li>
              <li data-target="#carousel-example-generic" data-slide-to="3"></li>
              <li data-target="#carousel-example-generic" data-slide-to="4"></li>
              </ol>
              <div className="carousel-inner" role="listbox">
              <div className="item active img-rounded">
              <div className="my-img"><img src= {"../src/image/1.png"} alt="..."/></div>
          </div>

          {this.props.onChange.map((image, index)=>{
              const path= "../src/image/";
              return <div className="item img-rounded" key={index}>
                  <div className="my-img"><img src= {path+image} alt="..."/></div>
              </div>
          })}
         </div>
      <a className="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
          <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"> </span>
          <span className="sr-only">Previous</span>
      </a>
      <a className="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
          <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"> </span>
          <span className="sr-only">Next</span>
      </a>
      </div>
  }
});

const Footer = React.createClass({
    render(){
    return (
        <div>
        <div className="navbar">
          <ul className="nav nav-pills">
          <li><a href="#">关于我们</a></li>
          <li><a href="#">友情链接</a></li>
          <li><a href="#">商务合作</a></li>
          <li><a href="#">欢迎骚扰</a></li>
          </ul>
        </div>
        <div className="text-center">
          <h5>2016.9.22   @All Rights Reserved</h5>
        </div>
        </div>
    )
  }
})

export default Home;