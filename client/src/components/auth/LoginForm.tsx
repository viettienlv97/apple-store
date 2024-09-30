import { FormEvent, useEffect, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Loading from '../UI/Loading'
import useUserStore from '../../zustand/userStore.ts'

const LoginForm = () => {
  const {user, loading, error, login} = useUserStore()
  const navigate = useNavigate()
  const inputEmail = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (user) navigate('/')
    if (inputEmail.current) inputEmail.current.focus()
  }, [user])

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    const form = e.target as HTMLFormElement
    const formData = new FormData(form)
    const authUser = Object.fromEntries(formData.entries()) as {user: string, password: string}
    if (authUser) {
      login(authUser)
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className='border-0 rounded-3 shadow p-5 bg-light'
    >
      <h2 className='text-center lato-light-italic text-dark mb-5'>Sign In</h2>
      <div className=' mb-4'>
        <div className='border border-1'>
          <input
            className='w-100 rounded-0 border-0 bg-light py-4 ps-3'
            type='text'
            ref={inputEmail}
            name='user'
            required
            placeholder='Email | Phone number'
          />
        </div>
        <div className='border border-top-0'>
          <input
            className='w-100 rounded-0 border-0 bg-light py-4 px-3'
            type='password'
            name='password'
            required
            placeholder='Password'
            minLength={8}
            title='Password must be at least 8 characters long.'
          />
        </div>
      </div>

      <div>
        <button className='text-light bg-btn-black border-0 w-100 py-4 d-flex justify-content-center'>
          {loading ? <Loading /> : 'SIGN IN'}
        </button>
      </div>
      <div className='d-flex justify-content-center mt-5 mb-3'>
        <span className='lato-regular-italic'>
          <span className='text-gray me-2'>Create an account?</span>
          <Link
            to={'/register'}
            className='text-decoration-none'
          >
            Sign up
          </Link>
        </span>
      </div>
    </form>
  )
}

export default LoginForm
