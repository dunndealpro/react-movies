import { Link } from 'react-router-dom';

export default function NavBar({user}) {
  console.log({user})
    return (
      <nav>
          <Link to="/">Movies</Link>
          &nbsp; | &nbsp;
          <Link to="/actors">Actors</Link>
         d<div>Welcome {user.userName}!</div>
      </nav>
    );
  }