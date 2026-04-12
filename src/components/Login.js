import { useState, useRef } from 'react'
import Header from './Header'
import { validateForm } from '../utils/validate'
const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true)
  const [errorMessage, setErrorMessage] = useState(null)
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const isSignInForm = () => {
    setIsSignIn(!isSignIn);
  }
  const handleForm = (e) => {
    e.preventDefault();
    const message = validateForm(email.current.value, password.current.value, name.current.value);
    setErrorMessage(message);
  }

  return (
    <div>
      <Header />
      <div className='absolute'>
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/fc9ebadf-d77a-4f9b-a0dd-499af5178dc5/web/IN-en-20260330-TRIFECTA-perspective_81d2307f-4ee1-416d-8721-ac2be7b2da1d_large.jpg" srcSet="https://assets.nflxext.com/ffe/siteui/vlv3/fc9ebadf-d77a-4f9b-a0dd-499af5178dc5/web/IN-en-20260330-TRIFECTA-perspective_81d2307f-4ee1-416d-8721-ac2be7b2da1d_large.jpg 2000w, https://assets.nflxext.com/ffe/siteui/vlv3/fc9ebadf-d77a-4f9b-a0dd-499af5178dc5/web/IN-en-20260330-TRIFECTA-perspective_81d2307f-4ee1-416d-8721-ac2be7b2da1d_medium.jpg 1279w, https://assets.nflxext.com/ffe/siteui/vlv3/fc9ebadf-d77a-4f9b-a0dd-499af5178dc5/web/IN-en-20260330-TRIFECTA-perspective_81d2307f-4ee1-416d-8721-ac2be7b2da1d_small.jpg 959w" alt="" aria-hidden="true" className="default-ltr-iqcdef-cache-19j6xtr" />
      </div>
      <form onSubmit={handleForm} className=' p-12 bg-black w-3/12 my-36 absolute mx-auto right-0 left-0 text-white bg-opacity-80 rounded-lg'>
        <h1 className='text-3xl font-bold py-4'>{isSignIn ? 'Sign In' : 'Sign Up'}</h1>
        {!isSignIn && (
          <input ref = {name} type="text" placeholder='Full Name' className='p-4 my-4 w-full bg-gray-700 rounded-lg' />
        )}
        <input ref={email} type="email" placeholder='Email or phone number' className='p-4 my-4 w-full bg-gray-700 rounded-lg' />
        <input ref={password} type="password" placeholder='Password' className='p-4 my-4 w-full bg-gray-700 rounded-lg' />
        <p className='text-red-700 py-2 '>{errorMessage}</p>
        <button type='submit' className='p-4 my-6 bg-red-700 w-full rounded-lg'>{isSignIn ? 'Sign In' : 'Sign Up'}</button>
        <p className='py-4 cursor-pointer' onClick={isSignInForm}>
          {isSignIn ? "New to Netflix? Sign Up Now" : "Already have an account? Sign In Now"}
        </p>
      </form>
    </div>
  )
}

export default Login
