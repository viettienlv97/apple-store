import UserForm from '../components/auth/UserForm'
import RegisterForm from '../components/auth/RegisterForm'

const RegisterPage = () => {
  return (
    <UserForm sectionId='register'>
      <RegisterForm />
    </UserForm>
  )
}

export default RegisterPage
