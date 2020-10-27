import React from 'react';
import axios from 'axios'
import UserCard from './UserCard'


class Followers extends React.Component {
    state = { 
        data: []
     }

     componentDidMount() { 
        axios.get('https://api.github.com/users/Wesley-Ryan/followers')
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
                {this.state.data.map((follower, index) => { 
                    return <UserCard user={follower} key={index} />
                })}
            </div>
         );
}
 
}

export default Followers;


