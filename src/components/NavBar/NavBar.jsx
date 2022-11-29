import { Link } from 'react-router-dom';
import '../NavBar/NavBar.css';

export default function NavBar({user}) {
  // console.log({user})
    return (
      <nav className='nav-style'>
          <Link to="/">Movies</Link>
          {/* &nbsp; | &nbsp; */}
          <Link to="/actors">Actors</Link>
         <div>Welcome {user.userName}!</div>
      </nav>
    );
  }