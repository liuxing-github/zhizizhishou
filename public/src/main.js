// import React from "react";
// import { render } from "react-dom";
// import App from "./components/App";
// import Login from "./components/Login"
//
// render(
//   <App/>,
//   document.getElementById("app")
// );

var a = 0;
var obj = {a:'obj',b:function(a){setTimeout(function()
{console.log(this.a);},1000)}} ;
obj.b(1);