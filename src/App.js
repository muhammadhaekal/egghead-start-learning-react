import React from 'react';
import PropTypes from 'prop-types';


class App extends React.Component {
  render(){
    let txt = this.props.txt
    let cat = this.props.cat
    return (
      <h1>{txt} : {cat}</h1>
    )
  }
}

App.propTypes = {
  txt: PropTypes.string,
  cat : PropTypes.number.isRequired
}

App.defaultProps = {
  txt: "this is the default text"
}

export default App
