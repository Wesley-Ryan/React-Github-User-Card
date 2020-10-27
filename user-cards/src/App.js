import React from 'react';
import axios from 'axios'
import './App.css';
import UserCard from './components/UserCard';


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
        <UserCard user={this.state.data} />
      </div>
     );
  }
}
 
export default App;
