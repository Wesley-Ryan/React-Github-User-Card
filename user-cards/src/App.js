import React from 'react';
import axios from 'axios'
import './App.css';


class App extends React.Component {
  constructor(){ 
    super()
    this.state = { 
      data: []
    }
  }
  componentDidMount() { 
    axios.get('https://api.github.com/users/Wesley-Ryan')
    .then((response) => { 
      console.log(response.data)
      this.setState({ 
        data: response.data
      })
    })
    .catch((error) => { 
      console.log("There was an error reteriving your data", error)
    })
  }
  render() { 
    return ( 
      <div>
        <h1>{this.state.data.login}</h1>
      </div>
     );
  }
}
 
export default App;
