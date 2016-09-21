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
    return <div>Navgation</div>
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