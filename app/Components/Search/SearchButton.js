var React = require('react');
require('../css/main.scss');

var SearchButton = React.createClass({
  setMode : function(){
    this.props.setMapMode("search");
  },
  render : function(){
    return(
      <div className="searchButton" onClick = {this.setMode} />
    );
  }
});

module.exports = SearchButton;