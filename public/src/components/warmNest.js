import React, {Component} from "react";
const Nest = React.createClass({
  getInitialState: function () {
    return {
      isClicked: true,
      imageArray: ["1.jpg", "3.jpg", "4.jpg", "6.jpg"]
    }
  },

  render(){
    return (
      <div className="home-nav">
        <Navgation/>
        <Content/>
        <Footer/>
      </div>
    )
  }
});

const Navgation = React.createClass({
  render(){

    return (

      <div className="navbar row home-head  nav-pills">

        <div className="col-lg-2 col-md-offset-1 home-head-img"><img src={"src/image/flower.png"} alt="logo"/>暖小窝</div>

        <ul className=" col-lg-5 col-md-offset-3 nav nav-pills navbar-right home-head-right">
          <li><a href="#">首页</a></li>
          <li><a href="#">暖窝窝</a></li>
          <li><a href="#">牵小手</a></li>
          <li><a href="#">情人湖</a></li>
          <li><a href="./components/Login">个人中心</a></li>
          <li><a href="#">退出</a></li>

        </ul>
      </div>
    )
  }
});
const Content = React.createClass({
  render(){
    return (
      <div className="warnNest-content">
      <ul className="menu">
        <li><a href = "#"> 书架</a><span></span>
          <div className  = "subMenu">
            <div className="picture">
              <ul id = "pic">
                <li><a href="#"><img src="../src/image/book1.jpg"></img></a></li>
                <li><a href="#"><img src="../src/image/book2.jpg"></img></a></li>
                <li><a href="#"><img src="../src/image/book3.jpg"></img></a></li>
                <li><a href="#"><img src="../src/image/book4.jpg"></img></a></li>
                <li><a href="#"><img src="../src/image/book5.jpg"></img></a></li>
                <li><a href="#"><img src="../src/image/book6.jpg"></img></a></li>
                <li><a href="#"><img src="../src/image/book1.jpg"></img></a></li>
                <li><a href="#"><img src="../src/image/book2.jpg"></img></a></li>
              </ul>
            </div>

          </div>
        </li>
        <li><a href = "#">相册</a><span></span>
          <div className  = "subMenu">
              <div className="picture">
              <ul id = "pic">
                <li><a href="#"><img src="../src/image/book1.jpg"></img></a></li>
                <li><a href="#"><img src="../src/image/book2.jpg"></img></a></li>
                <li><a href="#"><img src="../src/image/book3.jpg"></img></a></li>
                <li><a href="#"><img src="../src/image/book4.jpg"></img></a></li>
                <li><a href="#"><img src="../src/image/book5.jpg"></img></a></li>
                <li><a href="#"><img src="../src/image/book6.jpg"></img></a></li>
                <li><a href="#"><img src="../src/image/book1.jpg"></img></a></li>
                <li><a href="#"><img src="../src/image/book4.jpg"></img></a></li>
              </ul>
              </div>
          </div>
        </li>
        <li><a href = "#">纪念日</a><span></span>
          <div className  = "subMenu">
            <div>
              <p>date</p>
            </div>
          </div>
        </li>
        <li><a href = "#">档案</a><span></span>
          <div className  = "subMenu">
            <div>
              <p>history</p>
            </div>
          </div>
        </li>
      </ul>
      </div>
    )
  }
});
const Footer = React.createClass({
  render(){
    return (
      <div className="home-footer">
        <div className="row home-footer-last">
          <div className="col-lg-2 col-md-offset-1">下载地址<br/><img src={"src/image/13.png"} alt="微信公众号"/></div>
          <div className="col-lg-2 col-md-offset-1">博客地址<br/>http://blog.csdn.net/ting119</div>
          <div className="col-lg-2 col-md-offset-1">客服热线<br/>1234567</div>
          <div className="col-lg-3">公众号<br/><img src={"src/image/13.png"} alt="微信公众号"/></div>
        </div>

        <div className="text-center">
          <h5>2016.9.22 @All Rights Reserved</h5>
        </div>
      </div>
    )
  }
})
export default Nest;
