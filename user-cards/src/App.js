import React from 'react';
import axios from 'axios'
import './App.css';
import UserCard from './components/UserCard';
import Followers from './components/Followers';


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
      <div className='app'>
        <h2>Main User: {this.state.data.login}</h2>
        <UserCard user={this.state.data} />
    <h2>{this.state.data.login}'s Followers</h2>
        <Followers />
      </div>
     );
  }
}
 
export default App;
