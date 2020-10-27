import {
    Card, CardImg, CardText, CardBody,
    CardTitle, Button
  } from 'reactstrap';

const UserCard = (props) => {
    const { user } = props
    return (
        <div className='card-container'>
        <Card className='user' >
            <CardImg top width="100%" src={user.avatar_url} alt="Card image Avatar" />
            <CardBody>
            <CardTitle><b>User Name:</b>{user.login}</CardTitle>
            <CardText>
                <p><b>Public Repos:</b> {user.public_repos}</p>
                <p><b>Followers:</b> {user.followers}</p>
                <p><b>Following:</b> {user.following}</p>
            </CardText>
          <Button>Hire Me</Button>
        </CardBody>
      </Card>

        </div>
      );
}
 
export default UserCard;