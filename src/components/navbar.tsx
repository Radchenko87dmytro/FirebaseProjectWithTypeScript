import React from 'react'
import {Link} from "react-router-dom"
import { auth } from '../config/firebase'
import {useAuthState} from "react-firebase-hooks/auth"
import "../App.css";
import { signOut } from 'firebase/auth';

const Navbar = () => {
  const [user] = useAuthState(auth)

  const signUserOut = async () => {
    await signOut(auth)
  }
  return (
    <div className='navbar'>
      <div className='links'>
        <Link to="/">Home</Link>
        {!user ? (
          <Link to="/login">Login</Link>
        ) : (
          <Link to="/createpost">Create Post</Link>
        )}
      </div>
        <div className='user'>
          {user &&( 
            <>
           <p>{user?.displayName}</p>                                      {/*auth.currentUser  */}
           <img src={user?.photoURL || ""} width="100" height="100"></img> {/* auth.currentUser*/}
           <button onClick={signUserOut}>Log Out</button>
          </>
        )}
        </div>
    </div>
  )
}

export default Navbar