import UserCard from './UserCard'

const Followers = (props) => {
    const {followers} = props
    return ( 
        <div>
            {followers.map((follower, index) => { 
                return <UserCard follower={follower} key={index} />
            })}
        </div>
     );
}
 
export default Followers;