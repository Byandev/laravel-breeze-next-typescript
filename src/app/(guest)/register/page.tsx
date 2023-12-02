'use client'

import Link from 'next/link'
import { useAuth } from '@/hooks/auth'
import { useState } from 'react'

const Register = () => {
  const { register } = useAuth({
    middleware: 'guest',
    redirectIfAuthenticated: '/dashboard',
  })

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirmation, setPasswordConfirmation] = useState('')
  const [errors, setErrors] = useState([])

  const submitForm = event => {
    event.preventDefault()

    register({
      name,
      email,
      password,
      password_confirmation: passwordConfirmation,
      setErrors,
    })
  }

  return (
    <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100">
      <div>dsa</div>

      <div className="w-full sm:max-w-md mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg">
        <form onSubmit={submitForm}>
          {/* Name */}
          <div>
            <label htmlFor="name">Name</label>

            <input
              id="name"
              type="text"
              value={name}
              className="block mt-1 w-full"
              onChange={event => setName(event.target.value)}
              required
              autoFocus
            />
          </div>

          {/* Email Address */}
          <div className="mt-4">
            <label htmlFor="email">Email</label>

            <input
              id="email"
              type="email"
              value={email}
              className="block mt-1 w-full"
              onChange={event => setEmail(event.target.value)}
              required
            />
          </div>

          {/* Password */}
          <div className="mt-4">
            <label htmlFor="password">Password</label>

            <input
              id="password"
              type="password"
              value={password}
              className="block mt-1 w-full"
              onChange={event => setPassword(event.target.value)}
              required
              autoComplete="new-password"
            />
          </div>

          {/* Confirm Password */}
          <div className="mt-4">
            <label htmlFor="passwordConfirmation">Confirm Password</label>

            <input
              id="passwordConfirmation"
              type="password"
              value={passwordConfirmation}
              className="block mt-1 w-full"
              onChange={event => setPasswordConfirmation(event.target.value)}
              required
            />
          </div>

          <div className="flex items-center justify-end mt-4">
            <Link
              href="/login"
              className="underline text-sm text-gray-600 hover:text-gray-900">
              Already registered?
            </Link>

            <button className="ml-4">Register</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Register
