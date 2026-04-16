import { useDispatch } from 'react-redux';
import { auth } from '../utils/firebase';
import { signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from 'react'
import { LOGO } from '../utils/constants';

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const fallbackAvatar = "https://occ-0-4994-3662.1.nflxso.net/dnm/api/v6/SO2HoVCx33X8phZh2pZZmQ4QgNY/AAAABS8sWFjSyj1zyfgcnGamqyJ1E2ZubZGo8dndCM_ipf_5UpmVlkuf8IXzQlmPZQqTMWNjWukESRdLkFGHnf7zbY3MJCO3r4s.png?r=229";

  const handleSignOut = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
      navigate("/error");
    });
  }
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({
          uid: uid,
          email: email,
          displayName: displayName,
          photoURL: photoURL,
        }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, [dispatch]);

  return (
    <div className='flex justify-between absolute top-0 z-10 w-full bg-gradient-to-b from-black px-8 py-4 md:px-16'>
      <img
        className='w-36 md:w-44'
        src={LOGO}
        alt='logo'
      />
      {user && (
        <div className='flex p-2'>
          <img
            className="w-12 h-12 rounded-lg"
            alt="usericon"
            src={user.photoURL || fallbackAvatar}
            onError={(e) => {
              e.currentTarget.onerror = null;
              e.currentTarget.src = fallbackAvatar;
            }}
          ></img>
          <button onClick={handleSignOut} className='font-bold text-white'>(sign out)</button>
        </div>
      )}
    </div>
  )
}

export default Header