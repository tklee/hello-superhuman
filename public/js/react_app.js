var FlatButton = require('material-ui/FlatButton');

var App = React.createClass({
  render: function() {
    return(
      <div>
        <h1>Testing React Main Page</h1>
        <h1>Testing React Main Page</h1>
        <h1>Testing React Main Page</h1>
        <FlatButton label="FlatButton" />
      </div>
    );
  }
});

React.render(
    <App />,
    document.getElementById('app')
);
