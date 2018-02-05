import React from 'react';

//function component
class App extends React.Component {
  render(){
    // return <h1>Hellowww</h1>
    // similar to
    return React.createElement('h1',null,'helloww')
  }
}

// const App = () => <h1> Stateless component </h1>

export default App
