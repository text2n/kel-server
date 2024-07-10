import { useState } from 'react'
import { router } from '@inertiajs/react'
import LayoutPlain from '../LayoutPlain'
import '../../css/login.css'

const Login = (props: any) => {
  const [values, setValues] = useState({
    email: '',
    password: '',
  })

  function handleChange(e: any) {
    const key = e.target.id
    const value = e.target.value
    setValues((values) => ({
      ...values,
      [key]: value,
    }))
  }

  function handleSubmit(e: any) {
    e.preventDefault()
    router.post('/auth/login', values)
  }
  const loginError = props?.errorsBag?.E_INVALID_CREDENTIALS

  return (
    <div className="d-flex align-items-center py-4 bg-body-tertiary fullHeightWidth">
      <main className="form-signin w-100 m-auto">
        <form onSubmit={handleSubmit}>
          <h1 className="h3 mb-3 fw-normal">Sign in</h1>
          {loginError && (
            <div className="alert alert-danger" role="alert">
              {props?.errorsBag?.E_INVALID_CREDENTIALS}
            </div>
          )}

          <div className="form-floating">
            <input
              type="email"
              className="form-control"
              id="email"
              value={values.email}
              onChange={handleChange}
              placeholder="name@example.com"
            />
            <label htmlFor="email">Email address</label>
          </div>
          <div className="form-floating">
            <input
              type="password"
              className="form-control"
              id="password"
              value={values.password}
              onChange={handleChange}
              placeholder="Password"
            />
            <label htmlFor="floatingPassword">Password</label>
          </div>
          <button className="btn btn-primary w-100 py-2" type="submit">
            Sign in
          </button>
          <br/>
          <br/>
        </form>
      </main>
    </div>
  )
}
Login.layout = (page: any) => <LayoutPlain children={page} />
export default Login
